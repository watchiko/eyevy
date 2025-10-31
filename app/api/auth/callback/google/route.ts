import { NextResponse } from "next/server";
import fetch from "node-fetch";
import { serialize } from "cookie";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  if (!code) return new NextResponse("Missing code", { status: 400 });
  const { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI, GOOGLE_CLIENT_SECRET } = process.env;
  if (!GOOGLE_CLIENT_ID || !GOOGLE_REDIRECT_URI || !GOOGLE_CLIENT_SECRET) {
    throw new Error("Missing GOOGLE_CLIENT_ID or GOOGLE_REDIRECT_URI or GOOGLE_CLIENT_SECRET");
  }
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: GOOGLE_REDIRECT_URI,
      grant_type: "authorization_code",
    }),
  });
  const tokenData: any = await tokenRes.json();
  if (tokenData.error) return NextResponse.json(tokenData, { status: 400 });

  const idToken = tokenData.id_token;
  const [, payload] = idToken.split(".");
  const user = JSON.parse(Buffer.from(payload, "base64").toString("utf8"));

  const session = { uid: user.sub, email: user.email, name: user.name, picture: user.picture };
  const cookie = serialize("app_session", Buffer.from(JSON.stringify(session)).toString("base64"), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
  });

  const res = NextResponse.redirect(new URL("/app", req.url));
  res.headers.set("Set-Cookie", cookie);
  return res;
}
