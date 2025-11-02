import { Suspense, use } from "react";

async function fetchUserData(): Promise<{ name: string }> {
  return new Promise((resolve) => setTimeout(() => resolve({ name: "John" }), 1000));
}

function UserProfile() {
  const user = use(fetchUserData());

  return <div>{user.name}</div>;
}

async function fetchUserData2(): Promise<{ name: string }> {
  return new Promise((resolve) => setTimeout(() => resolve({ name: "Jane" }), 2500));
}

function UserProfile2() {
  const user = use(fetchUserData2());

  return <div>{user.name}</div>;
}

async function fetchUserData3(): Promise<{ name: string }> {
  return new Promise((resolve) => setTimeout(() => resolve({ name: "Joy" }), 5000));
}

function UserProfile3() {
  const user = use(fetchUserData3());

  return <div>{user.name}</div>;
}

export default function Susp() {
  return (
    <>
      <Suspense fallback={<p>Loading user...</p>}>
        <UserProfile />
      </Suspense>
      <Suspense fallback={<p>Loading user...</p>}>
        <UserProfile2 />
      </Suspense>
      <Suspense fallback={<p>Loading user...</p>}>
        <UserProfile3 />
      </Suspense>
    </>
  );
}
