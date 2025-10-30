import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="text-black p-8 font-sans leading-loose">
        <div className="mb-8">
          <h1 className="text-2xl">Watchiko</h1>
          <p className="text-lg">
            Watchiko is a real-time activity monitoring and reporting system designed for
            personally-owned computer systems. It helps users gain insight into their own system
            usage patterns, device events, and local activity — all while respecting privacy and
            ethical boundaries.
          </p>
        </div>
        <div className="mb-8">
          <h1 className="text-2xl">🎯 Purpose</h1>
          <p className="text-lg">
            Watchiko is built for personal digital forensics with a live-first mindset. It doesn't
            just log what happened — it alerts you as soon as something happens.
          </p>
          <p className="text-lg">
            Whether it's a USB device being plugged in, a suspicious process starting, or a file
            being transferred, Watchiko is designed to:
          </p>
          <ul className="list-disc pl-4 text-lg list-inside">
            <li>Detect events immediately</li>
            <li>Classify them based on severity</li>
            <li>Report them to you or your cloud dashboard</li>
            <li>Store them for later analysis</li>
          </ul>
          <p className="text-lg">
            It's like a personal black box for your system — but one that speaks up the moment
            something matters.
          </p>
        </div>
        <div className="mb-8">
          <h1 className="text-2xl">🧩 System Overview</h1>
          <p className="text-lg">Watchiko is built as a modular four-tier system:</p>

          <ul className="list-disc pl-4 text-lg list-inside">
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
        <div className="mb-8">
          <h1 className="text-2xl">🧠 Philosophy</h1>
          <p className="text-lg">Watchiko is built with a strong emphasis on:</p>
          <ul className="list-disc pl-4 text-lg list-inside">
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
        <div className="mb-8">
          <h1 className="text-2xl">📂 Event Hook Architecture</h1>
          <p className="text-lg">
            An Event Hook is a custom module used to detect specific type of event and provide to
            Daemon.
          </p>
          <p className="text-lg">Each event hook module consists of:</p>
          <ul className="list-disc pl-4 text-lg list-inside">
            <li>./&lt;hookName&gt;/src/main.rs: Logic of the hook written in Rust</li>
            <li>./&lt;hookName&gt;/Cargo.toml: Dependencies required by the hook</li>
          </ul>
          <p className="text-lg">These modules are stored in the hooks/internal folder</p>
          <p className="text-lg">
            The final compiled hook will be generated in ./dist/internal folder as
            &lt;hookName&gt;/&lt;hookName&gt;.exe (in case of Windows binary)
          </p>
          <p className="text-lg">
            Users can author their own hooks using the provided template and placed in the
            hooks/custom folder
          </p>
        </div>
        <div className="mb-8">
          <h1 className="text-2xl">⚠️ Ethical Usage Warning</h1>
          <p className="text-lg">
            Watchiko is not spyware. It is not intended for surveillance or unauthorized monitoring
            of other users.
          </p>

          <p className="text-lg">❌ Watchiko does not support:</p>
          <ul className="list-disc pl-4 text-lg list-inside">
            <li>Recording webcam feeds</li>
            <li>Capturing audio sources</li>
            <li>Taking random screenshots</li>
            <li>Streaming live screencasts</li>
          </ul>
          <p className="text-lg">
            These features are not intented in the design and purpose of Watchiko.
          </p>

          <p className="text-lg">✅ Watchiko is intended only for:</p>
          <ul className="list-disc pl-4 text-lg list-inside">
            <li>Monitoring your own device activity</li>
            <li>Tracking system events (e.g., USB insert/remove)</li>
            <li>Logging and analyzing usage patterns on your personal machine</li>
          </ul>
        </div>
        <div className="mb-8">
          <h1 className="text-2xl">📜 Legal Disclaimer</h1>
          <p className="text-lg">
            The software must only be installed and used on systems personally owned and operated by
            the user.
          </p>

          <p className="text-lg">
            By installing and using Watchiko, you acknowledge and agree to the following:
          </p>
          <ul className="list-disc pl-4 text-lg list-inside">
            <li>You will use Watchiko only on systems you personally own and operate.</li>
            <li>
              You will not use Watchiko to monitor other individuals without their knowledge or
              consent.
            </li>
            <li>
              You understand that misuse of this software may violate local laws and regulations.
            </li>
            <li>You accept full responsibility for how Watchiko is used on your system.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
