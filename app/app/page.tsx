import { cookies } from "next/headers";

export default async function App() {
  // return (
  //   <>
  //     <div className="text-black">App page</div>
  //   </>
  // );
  const cookieStore = await cookies();
  const raw = cookieStore.get('app_session')?.value;
  if (!raw) {
    // server redirect to login
    return Response.redirect('/api/auth/login');
  }
  const user = JSON.parse(Buffer.from(raw, 'base64').toString('utf8'));
  return <div>Signed in as {user.email}</div>;
}
