import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="px-4 py-8 flex-1 flex flex-col w-full items-center justify-between bg-black text-white shadow-2xl select-none">
        <div className=" flex flex-col gap-8 items-center leading-loose flex-1 justify-center">
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            <div className="text-6xl sm:text-8xl font-black font-serif tracking-tighter">eyevy</div>
            <div className="text-xl font-serif">Stay alert.</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link href={"/api/auth/login"}>
              <button className="bg-blue-500 text-white text-2xl py-4 px-16 rounded cursor-pointer font-sans">
                Login with Google
              </button>
            </Link>
          </div>
          <div className="mb-8"></div>
        </div>
        <div className="text-normal font-light font-serif">
          With ♡{" "}
          <span className="font-black">
            <a href="https://watchiko.vercel.app" target="_blank">
              Watchiko
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
