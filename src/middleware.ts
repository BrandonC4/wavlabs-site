import { NextRequest, NextResponse } from "next/server";

/**
 * l8r.wavlabs.dev serves the product site; wavlabs.dev serves the
 * company page. Requests to the l8r subdomain are rewritten into the
 * /l8r route tree, so l8r.wavlabs.dev/ renders the product landing
 * while paths like /privacy or /terms pass through unchanged.
 */
export function middleware(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  if (!host.startsWith("l8r.")) return NextResponse.next();

  const { pathname } = req.nextUrl;

  // Root of the subdomain → the product landing.
  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/l8r";
    return NextResponse.rewrite(url);
  }

  // The subdomain gets the lantern favicon, not the Wav Labs mark.
  if (pathname === "/favicon.ico") {
    const url = req.nextUrl.clone();
    url.pathname = "/l8r-favicon.ico";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  // Skip static assets and API routes — but keep /favicon.ico so the
  // l8r host rewrite above can swap in the lantern mark.
  matcher: ["/((?!_next|api|.*\\..*).*)", "/favicon.ico"],
};
