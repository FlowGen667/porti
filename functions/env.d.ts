// Minimal ambient types for Cloudflare Pages Functions.
// Avoids pulling the full @cloudflare/workers-types dependency.
// For richer types, install `@cloudflare/workers-types` and reference it instead.

interface EventContext<Env = unknown, P extends string = string, Data = unknown> {
  request: Request;
  env: Env;
  params: Record<P, string | string[]>;
  data: Data;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
  waitUntil: (promise: Promise<unknown>) => void;
}

type PagesFunction<Env = unknown, P extends string = string, Data = unknown> = (
  context: EventContext<Env, P, Data>
) => Response | Promise<Response>;
