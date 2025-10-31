import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="px-4 py-8 flex-1 flex w-full h-auto items-center justify-center bg-black text-white shadow-2xl">
        <div className=" flex flex-col gap-4 items-center leading-loose">
          <div className="text-8xl font-black">EYEVY</div>
          <div className="text-4xl ">Watch... Monitor.. Alert!</div>
          <div className="mt-4"></div>
          <Link href={"/api/auth/login"}>
            <button className="bg-blue-500 text-white text-2xl py-4 px-16 rounded cursor-pointer">
              Login with Google
            </button>
          </Link>
          <div className="mb-8"></div>
          <div className="text-normal font-light">
            From the developers of <span className="font-black">Watchiko</span>
          </div>
        </div>
      </div>
    </>
  );
}
