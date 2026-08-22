import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Server-side client for writing waitlist entries.
// The anon key is safe here — RLS allows public inserts on the waitlist
// table but only the service role can read entries.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
