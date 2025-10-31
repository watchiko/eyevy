import Link from "next/link";

export default function HomeHeader() {
  return (
    <>
      <div className="flex gap-4 p-4 justify-between items-center shadow-2xl text-black">
        <div className="flex gap-4  justify-between items-center">
          <Link href={"/home"} className="font-black text-xl">
            EYEVY
          </Link>
          <div className="flex gap-4 justify-between items-center ml-4">
            <Link href={"/home/about"}>About</Link>
            <Link href={"/home/privacy"}>Privacy</Link>
            <Link href={"/home/tos"}>TOS</Link>
          </div>
        </div>
      </div>
    </>
  );
}
