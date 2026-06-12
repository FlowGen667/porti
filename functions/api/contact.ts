/**
 * Cloudflare Pages Function — contact form handler.
 * Deployed automatically by Cloudflare Pages from the /functions directory.
 *
 * Optional environment variables (set in the Pages dashboard):
 *   CONTACT_WEBHOOK  — a webhook URL (e.g. Discord/Slack/Make) to forward submissions
 *   RESEND_API_KEY   — if set, sends an email via Resend to CONTACT_TO
 *   CONTACT_TO       — destination email (defaults to mondaini.contato@gmail.com)
 */

interface Env {
  CONTACT_WEBHOOK?: string;
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
}

type Payload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string; // honeypot
  lang?: string;
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  // Honeypot — silently accept to not tip off bots.
  if (body.company) return json({ ok: true });

  const name = (body.name ?? '').trim();
  const email = (body.email ?? '').trim();
  const message = (body.message ?? '').trim();

  if (!name || !email || !message || !isEmail(email)) {
    return json({ ok: false, error: 'validation' }, 422);
  }
  if (message.length > 5000 || name.length > 200) {
    return json({ ok: false, error: 'too_long' }, 422);
  }

  const to = env.CONTACT_TO ?? 'mondaini.contato@gmail.com';
  const text = `New contact from the portfolio (${body.lang ?? 'pt'})\n\nName: ${name}\nEmail: ${email}\n\n${message}`;

  try {
    // Forward to a webhook if configured.
    if (env.CONTACT_WEBHOOK) {
      await fetch(env.CONTACT_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: text, name, email, message, lang: body.lang }),
      });
    }

    // Or send an email via Resend if a key is present.
    if (env.RESEND_API_KEY) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Portfolio <onboarding@resend.dev>',
          to: [to],
          reply_to: email,
          subject: `Novo contato — ${name}`,
          text,
        }),
      });
    }
  } catch (err) {
    // Don't fail the user if a downstream provider hiccups; log for observability.
    console.error('contact forward failed', err);
  }

  return json({ ok: true });
};

// Reject non-POST methods.
export const onRequest: PagesFunction<Env> = async ({ request, next }) => {
  if (request.method === 'POST') return next();
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        Allow: 'POST, OPTIONS',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }
  return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
};
