import { createClient, SupabaseClient } from "@supabase/supabase-js";

// l8r runs on its own Supabase project — this client is service-role
// only and never reaches the browser. Lazily initialized so builds
// don't throw before env vars are configured.
let _client: SupabaseClient | null = null;

export function getL8rAdmin(): SupabaseClient {
  if (_client) return _client;
  const url = process.env.L8R_SUPABASE_URL;
  const key = process.env.L8R_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error(
      "L8R_SUPABASE_URL and L8R_SERVICE_ROLE_KEY must be set in Vercel → Settings → Environment Variables.",
    );
  }
  _client = createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  return _client;
}
