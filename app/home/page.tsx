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
      <div className="bg-neutral-900 text-white p-8 font-sans">
        <div className="mx-auto text-center">
          <div className="my-16 flex flex-col justify-center">
            <h1 className="text-4xl mb-4 font-serif">Eyevy</h1>
            <p className="text-lg leading-loose tracking-normal">
              Helps you track system events on an immediate-as-possible kind of approach. <br />
              Eyevy works together with Evstore Hub, which is part of Watchiko.
            </p>
          </div>
          <div className="my-16 flex flex-col justify-center">
            <h1 className="text-4xl mb-4 font-serif">Watchiko</h1>
            <p className="text-lg leading-loose tracking-normal">
              A real-time activity monitoring and reporting system designed for personally-owned
              computer systems. <br />
              It helps users gain insight into their own system usage patterns, device events, and
              local activity — all while respecting privacy and ethical boundaries.
            </p>
          </div>
          <div className="my-16 flex flex-col justify-center">
            <h1 className="text-4xl mb-4 font-serif">Purpose</h1>
            <p className="text-lg leading-loose tracking-normal">
              Watchiko is built for personal digital forensics with a live-first mindset. <br />
              It doesn't just log what happened — it alerts you as soon as something happens.
            </p>
            <p className="text-lg leading-loose tracking-normal">
              It's like a personal black box for your system — but one that speaks up the moment
              something matters.
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
