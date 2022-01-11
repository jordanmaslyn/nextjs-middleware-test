import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { headers, nextUrl: url } = req;

  const country = headers.get("CF-IPCountry") ?? "default";
  url.searchParams.set("country", country);

  return NextResponse.rewrite(url);
}
