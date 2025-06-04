import Link from "next/link";

export default function BubbleMapComp() {
  return (
    <div className="bubble-map-body">
      <h1 className="color-[#ff8c00]"> COMING SOON!</h1>
      <Link href="/" className="back-home-btn">
        ⬅ Back Home
      </Link>
      {/* 
      <div className="cyber-grid"></div>
      <div className="scene-vignette"></div>
      <div className="background-text-container"></div>

      <div
        className="bubble-map-layout"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "1300px",
          margin: "0 auto",
          gap: "32px",
        }}
      >
        <div
          className="bubble-map-container"
          style={{
            flex: "1 1 0",
            minWidth: "350px",
            maxWidth: "900px",
          }}
        >
          <h1>UDIN BUBBLE MAP</h1>
          <div className="graphql-section">
            <input
              type="text"
              id="tokenAddress"
              placeholder="Enter Solana Token Address (mocked)"
            />
            <button id="fetchBtn ">Fetch Holdings</button>
          </div>
          <div id="bubble-map"></div>
        </div>

        <div
          id="wallet-list-box"
          style={{
            flex: "0 0 340px",
            minWidth: "260px",
            maxWidth: "340px",
            background: "rgba(10,10,10,0.95)",
            border: "2px solid #ff8c00",
            borderRadius: "16px",
            boxShadow: "0 0 30px rgba(255,140,0,0.15)",
            padding: "24px 18px 18px 18px",
            marginTop: "60px",
            color: "#fff",
          }}
        >
          <h2
            style={{
              color: "#ff8c00",
              fontSize: "1.25rem",
              marginBottom: "18px",
              textAlign: "center",
              letterSpacing: "1px",
            }}
          >
            Top Wallets
          </h2>
          <div
            id="wallet-list-content"
            style={{
              maxHeight: "600px",
              overflowY: "auto",
            }}
          ></div>
        </div>
      </div>

      <div className="footer">
        Powered by GraphQL (mocked) & D3.js. Always DYOR! 
      </div>*/}
    </div>
  );
}
