import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } = process.env;

    if (!GOOGLE_CLIENT_ID || !GOOGLE_REDIRECT_URI) {
      console.error("Missing env vars:", { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI });
      throw new Error("Missing GOOGLE_CLIENT_ID or GOOGLE_REDIRECT_URI");
    }

    const params = new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID,
      redirect_uri: GOOGLE_REDIRECT_URI,
      response_type: "code",
      scope: "openid email profile",
      access_type: "offline",
      prompt: "consent",
      state: "state-" + Math.random().toString(36).slice(2),
    });

    return NextResponse.redirect(
      `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
    );
  } catch (err: any) {
    console.error("Login route error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
