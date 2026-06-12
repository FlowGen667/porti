/**
 * Cloudflare Worker entry — serves the static Astro build (via the ASSETS
 * binding) and handles the contact form at POST /api/contact.
 *
 * Deployed with `wrangler deploy` using Workers Static Assets (see wrangler.toml).
 *
 * Optional secrets (set in the Cloudflare dashboard → Settings → Variables):
 *   CONTACT_WEBHOOK  — webhook URL (Discord/Slack/Make) to forward submissions
 *   RESEND_API_KEY   — if set, sends the message as email via Resend
 *   CONTACT_TO       — destination email (defaults to mondaini.contato@gmail.com)
 */

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
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

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        Allow: 'POST, OPTIONS',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
  }

  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  // Honeypot — silently accept so bots don't learn they were caught.
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
    if (env.CONTACT_WEBHOOK) {
      await fetch(env.CONTACT_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: text, name, email, message, lang: body.lang }),
      });
    }

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
    // Don't fail the visitor if a downstream provider hiccups.
    console.error('contact forward failed', err);
  }

  return json({ ok: true });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact') {
      return handleContact(request, env);
    }

    // Everything else: serve the static Astro build.
    // Unknown paths fall back to 404.html via `not_found_handling` in wrangler.toml.
    return env.ASSETS.fetch(request);
  },
};
