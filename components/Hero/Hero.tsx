import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="px-4 py-8 flex w-full h-auto items-center justify-center bg-black text-white">
        <div className=" flex flex-col gap-4 items-center ">
          <div className="text-8xl font-black">EYEVY</div>
          <div className="text-4xl ">Watch... Monitor.. Alert!</div>
          <div className="text-2xl font-light">
            Works by <span className="font-bold">Watchiko</span>
          </div>
          <div className="mt-4"></div>
          <Link href={"/login"}>
            <button className="bg-white text-black text-2xl py-4 px-16 rounded cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
