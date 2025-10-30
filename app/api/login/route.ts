import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password }: { email: string; password: string } = body;
  const isLoggedIn = email.includes("@") && password.length > 6;
  if (isLoggedIn) return NextResponse.json({ isLoggedIn }, { status: 200 });
  else return NextResponse.json({ isLoggedIn }, { status: 204 });
}
