import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function O() {
  const cookieStore = await cookies();
  const raw = cookieStore.get("app_session")?.value;
  if (!raw) {
    redirect("/api/auth/login");
  }
  const user = JSON.parse(Buffer.from(raw, "base64").toString("utf8"));
  return <div className="text-black font-serif p-4">Hello {user.email}, <br /><br />This application is under development and is not yet ready to be used at the moment. <br />Kindly revisit during beta testing phase once you get notified. <br /><br />Regards, <br />Administrator.</div>;
}
