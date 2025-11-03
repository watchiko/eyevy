import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Hero />
      </div>
      <div className="bg-neutral-900 text-white p-8 font-sans select-none">
        <div className="mx-auto text-center">
          <div className="my-16 flex flex-col justify-center">
            <h1 className="text-4xl mb-4 font-serif">Eyevy</h1>
            <p className="text-lg leading-loose tracking-normal">
              Helps you view system events on an immediate-as-possible kind of approach. <br />
              Eyevy works together with Evstore Hub, which is part of Watchiko.
            </p>
          </div>
        </div>
      </div>
      <div className="py-4 flex flex-col justify-center items-center bg-black text-white">
        <Footer />
      </div>
    </>
  );
}
