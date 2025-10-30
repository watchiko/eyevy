"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  async function doLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });
      const data = await response.json();
      console.log("data", data);
      if (response.status === 200) {
        if (data?.isLoggedIn) {
          router.push("/app");
        }
      }
    } catch (err) {
      console.log("error:", err);
    }
  }
  return (
    <>
      <div className="text-black flex-1 flex flex-col">
        <div className="flex flex-col items-center justify-center flex-1">
          <form
            onSubmit={doLogin}
            className="p-8 gap-4 border border-gray-200 flex flex-col rounded shadow-2xl min-w-[400px] max-w-lg"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-2 border border-gray-200 rounded w-full"
                autoComplete="email"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="block">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="p-2 border border-gray-200 rounded w-full"
                autoComplete="current-password"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="px-8 py-4 bg-black text-white rounded w-full cursor-pointer"
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
