import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const FUNCTIONS_BASE = `${SUPABASE_URL}/functions/v1`;

export async function POST(req: NextRequest) {
  const { title, body } = await req.json();
  if (!title || !body) {
    return NextResponse.json(
      { error: "missing title or body" },
      { status: 400 },
    );
  }

  // Call the broadcast-push edge function.
  // The service role key is sent as the Authorization header —
  // the edge function uses its own service role key internally,
  // but we authenticate the request with the anon key + service role.
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceRoleKey) {
    return NextResponse.json(
      { error: "SUPABASE_SERVICE_ROLE_KEY not configured" },
      { status: 500 },
    );
  }

  const res = await fetch(`${FUNCTIONS_BASE}/broadcast-push`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${serviceRoleKey}`,
    },
    body: JSON.stringify({ title, body }),
  });

  const data = await res.json();
  if (!res.ok) {
    return NextResponse.json(data, { status: res.status });
  }

  return NextResponse.json(data);
}
