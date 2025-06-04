import Link from "next/link";

export default function VolumebotComp() {
  return (
    <div className="flex flex-col justify-center items-center p-6 w-full h-full min-h-screen">
      <Link href="/" className="back-home-btn">
        ⬅ Back Home
      </Link>

      {/* <div className="scene-vignette"></div>
      <div className="background-text-container"></div>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-12 lg:gap-6 mx-6 lg:w-full">
        <UtilityComp
          title="UDIN Rug Checker"
          placeholder="Eg: 9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E"
          buttonText="Check Token"
        />

        <UtilityComp
          title="UDIN Oracle"
          placeholder="Eg: 9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E"
          buttonText="Predict"
        />
      </div>
      <div className="footer">
        Powered by public Solana APIs. For entertainment only. Always DYOR!
      </div> */}
      <h1 className="color-[#ff8c00] bold welcome-text">Telegram Volume Bot</h1>
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg mx-auto px-6 py-12 rounded-xl max-w-4xl font-sans text-gray-100 animation-text">
        <h2 className="mb-8 font-extrabold text-4xl text-center tracking-wide">
          Stay Ahead of the Market with Real-Time Volume Alerts on Telegram
        </h2>
        <p className="mx-auto mb-6 max-w-4xl text-gray-300 text-lg text-center leading-relaxed">
          Instantly monitor token volume spikes and trends — identify early
          opportunities before the crowd moves.
        </p>

        <ul className="space-y-6 mx-auto px-3 w-full text-gray-300 text-lg leading-relaxed">
          <li className="px-6">
            <strong className="text-orange-400">Smart, Timely Alerts:</strong>{" "}
            Our Telegram Volume Bot delivers precision notifications, ensuring
            you never miss critical volume moves.
          </li>
          <li className="px-6">
            <strong className="text-orange-400">
              Accurate On-Chain Tracking:
            </strong>{" "}
            Empower your trading decisions with real-time volume data,
            seamlessly delivered to Telegram.
          </li>
          <li className="px-6">
            <strong className="text-orange-400">
              Whale Activity & Anomaly Detection:
            </strong>{" "}
            Track large trades and unusual volume shifts to gain an unrivaled
            competitive edge.
          </li>
          <li className="px-6">
            <strong className="text-orange-400">
              Built for Speed, Designed for Traders:
            </strong>{" "}
            Whether scalping or investing, receive actionable insights exactly
            when you need them.
          </li>
          <li className="px-6">
            <strong className="text-orange-400">
              24/7 Automated Monitoring:
            </strong>{" "}
            Simplify your workflow with round-the-clock volume surveillance — no
            manual tracking required.
          </li>
          <li className="px-6">
            <strong className="text-orange-400">
              Trusted by Professionals:
            </strong>{" "}
            Experience real-time volume intelligence powered by cutting-edge
            automation.
          </li>
        </ul>

        <p className="mx-auto mt-10 max-w-2xl text-gray-400 text-center italic">
          Take control of your crypto trading — get the volume data that
          matters, delivered straight to your fingertips.
        </p>
      </section>
    </div>
  );
}
