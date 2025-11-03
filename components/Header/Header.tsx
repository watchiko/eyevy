import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex gap-4 p-4 justify-between items-center shadow-2xl text-black">
        <div className="flex gap-4  justify-between items-center">
          <Link href={"/home"} className="font-black text-2xl font-serif leading-normal">
            eyevy
          </Link>
        </div>
      </div>
    </>
  );
}
