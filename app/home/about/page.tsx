export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <div className="bg-neutral-900 text-white p-8 font-sans">
        <div className="max-w-[75vw] mx-auto">
          <div className="my-16 flex flex-col justify-center">
            <h1 className="text-4xl">Eyevy</h1>
            <p className="text-lg leading-loose tracking-normal">
              Helps you track system events on an immediate-as-possible kind of approach. Eyevy's
              backbone is Evstore Hub, a cloud repository storing your system events. Eyevy and
              Evstore are part of the broader ecosystem, Watchiko.
            </p>
          </div>
          <div className="my-16 flex flex-col justify-center">
            <h1 className="text-4xl">Watchiko</h1>
            <p className="text-lg leading-loose tracking-normal">
              A real-time activity monitoring and reporting system designed for personally-owned
              computer systems. It helps users gain insight into their own system usage patterns,
              device events, and local activity — all while respecting privacy and ethical
              boundaries.
            </p>
          </div>
          <div className="my-16 flex flex-col justify-center">
            <h1 className="text-4xl">Purpose</h1>
            <p className="text-lg leading-loose tracking-normal">
              Watchiko is built for personal digital forensics with a live-first mindset. It doesn't
              just log what happened — it alerts you as soon as something happens.
            </p>
            <p className="text-lg leading-loose tracking-normal">
              Whether it's a USB device being plugged in, a suspicious process starting, or a file
              being transferred, Watchiko is designed to:
            </p>
            <ul className="list-disc pl-4 text-lg list-inside leading-loose tracking-normal">
              <li>Detect events immediately</li>
              <li>Classify them based on severity</li>
              <li>Report them to you or your cloud dashboard</li>
              <li>Store them for later analysis</li>
            </ul>
            <p className="text-lg leading-loose tracking-normal">
              It's like a personal black box for your system — but one that speaks up the moment
              something matters.
            </p>
          </div>
          <div className="my-16 flex flex-col justify-center">
            <h1 className="text-4xl">System Overview</h1>
            <p className="text-lg leading-loose tracking-normal">
              Watchiko is built as a modular four-tier system:
            </p>

            <ul className="list-disc pl-4 text-lg list-inside leading-loose tracking-normal">
              <li>
                Daemon: A background service that monitors system-level events, passes to Watchiko
                Evstore Pub
              </li>
              <li>
                Evstore Pub: Local storage for events, and publishes suspicious events to Watchiko
                Evstore Hub
              </li>
              <li>
                Evstore Hub: Cloud storage for events data persistence, acts as the server to which
                other clients can connect
              </li>
              <li>
                Eyevy: Client app and webpage for browsing through events reported. If enabled,
                supports push notifications for immediate alerts
              </li>
            </ul>
          </div>
          <div className="my-16 flex flex-col justify-center">
            <h1 className="text-4xl">Philosophy</h1>
            <p className="text-lg leading-loose tracking-normal">
              Watchiko is built with a strong emphasis on:
            </p>
            <ul className="list-disc pl-4 text-lg list-inside leading-loose tracking-normal">
              <li>Transparency: Users know exactly what is being tracked</li>
              <li>
                Modularity: Event tracking is defined through composable event hooks and optional
                native implementations
              </li>
              <li>
                Security: Core features like cloud sync and reporting are non-optional and tightly
                controlled
              </li>
              <li>Privacy: No invasive features, no hidden surveillance</li>
              <li>
                Forensic Value: Every event is timestamped, classified, and stored for later review
              </li>
              <li>
                Live-ness: Alerts are generated as soon as events are detected — not hours later
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
