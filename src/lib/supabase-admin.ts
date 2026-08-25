import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Admin client with service role key — bypasses RLS.
// Only used server-side in the /admin route. Never expose to client.
// Lazily initialized so the module doesn't throw at build time when
// the service role key isn't present (e.g. during Vercel build before
// env vars are configured).
let _client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (_client) return _client;
  if (!serviceRoleKey) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY is not set. Add it in Vercel project settings.",
    );
  }
  _client = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
  return _client;
}
