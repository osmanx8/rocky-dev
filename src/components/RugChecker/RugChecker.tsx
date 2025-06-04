import Link from "next/link";
import UtilityComp from "./UtilityComp";

export default function RugCheckerComp() {
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
      <h1 className="color-[#ff8c00]"> COMING SOON!</h1>
    </div>
  );
}
