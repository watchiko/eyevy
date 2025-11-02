import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function O() {
  const cookieStore = await cookies();
  const raw = cookieStore.get("app_session")?.value;
  if (!raw) {
    redirect("/api/auth/login");
  }
  const user = JSON.parse(Buffer.from(raw, "base64").toString("utf8"));
  return <div className="text-black">Signed in as {user.email}</div>;
}
