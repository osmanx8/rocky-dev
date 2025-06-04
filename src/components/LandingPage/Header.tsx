"use client";

import Link from "next/link";
import { useRef } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import GLBViewer from "./GlbViewer";
import { useAuth } from "@/contexts/AuthContext";

const modelUrls = [
  "/udin_scene/Animation_Backflip_and_Hooks_withSkin.glb",
  "/udin_scene/Animation_Backflip_Sweep_Kick_withSkin.glb",
  "/udin_scene/Animation_Boxing_Practice_withSkin.glb",
  "/udin_scene/Animation_Boxing_Warmup_withSkin.glb",
  "/udin_scene/Animation_Breakdance_1990_withSkin.glb",
  "/udin_scene/Animation_Casual_Walk_withSkin.glb",
  "/udin_scene/Animation_Counterstrike_withSkin.glb",
  "/udin_scene/Animation_Flying_Fist_Kick_withSkin.glb",
  "/udin_scene/Animation_Handstand_Flip_withSkin.glb",
  "/udin_scene/Animation_Idle_10_withSkin.glb",
];

export const Header = () => {
  const account = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  const buttonRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);

  // Cycle through models
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % modelUrls.length);
    }, 5000); // Change model every 5 seconds

    return () => clearInterval(interval);
  }, []);

  //   useOnClickOutside(menuRef, () => setIsMenuOpen(false));
  useOnClickOutside(menuRef, () => setIsMenuOpen(false));

  return (
    <>
      {/* Add the GLB animation as background */}
      <GLBViewer modelUrl={modelUrls[currentIndex]} />

      <div className="cyber-grid"></div>
      <div className="cyber-corner cyber-corner-tl"></div>
      <div className="cyber-corner cyber-corner-tr"></div>
      <div className="cyber-corner cyber-corner-bl"></div>
      <div className="cyber-corner cyber-corner-br"></div>
      <div className="scene-vignette"></div>

      <div id="scene-container"></div>

      <div className="story-overlay">
        <h2 className="story-title">The Legend of UDIN</h2>
        <p className="story-text"></p>
      </div>

      <div
        className="cursor-pointer menu-button"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        ref={menuRef}
      >
        <span className="menu-icon"></span>
        Menu
      </div>

      {isMenuOpen && (
        <div className="duration-300 menu-content" ref={menuRef}>
          <Link href="/volume-bot" className="rug-checker-btn">
            VOLUME BOT
          </Link>
          <Link href="/rug-checker" className="rug-checker-btn">
            Rug Checker
          </Link>
          {/* <Link href="/udin-bubble-map" className="rug-checker-btn">
            BUBBLE MAP
          </Link> */}
        </div>
      )}

      <div className="social-icons">
        <a
          href="https://twitter.com"
          target="_blank"
          className="social-icon"
          title="Follow us on Twitter"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
          </svg>
        </a>
        <a
          href="https://telegram.org"
          target="_blank"
          className="social-icon"
          title="Join our Telegram"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
        </a>
      </div>

      {account.loadedIn && (
        <div className="flex justify-center mx-auto">
          <h1 className="bottom-4 absolute color-[#ff8c00] bold welcome-text">
            Telegram Volume Bot
          </h1>
        </div>
      )}
    </>
  );
};
