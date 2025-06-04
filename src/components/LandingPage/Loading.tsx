"use client";

import { Header } from "@/components/LandingPage/Header";
import { useState, useEffect, useLayoutEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [showLoading, setShowLoading] = useState(true);
  const [isScreenOpen, setIsScreenOpen] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const account = useAuth();

  useEffect(() => {
    const duration = 2000; // 4 seconds
    const steps = 100;
    const intervalTime = duration / steps;

    let currentProgress = 0; // Start at 1 immediately
    setProgress(currentProgress); // Show progress immediately

    const interval1 = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval1);
        setTimeout(() => setShowLoading(false), 1000); // Slight delay to finish visually
        account.Loaded();
      }
    }, intervalTime);

    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    if (!showLoading) {
      setIsScreenOpen(false);
      account.Loaded();
    }
  }, [showLoading]);

  return (
    <div className="flex flex-col justify-center items-center backdrop-blur-md w-full h-full min-h-screen">
      {isScreenOpen && (
        <div id="loading-screen">
          <div className="container">
            <div className="background-effect"></div>
            <div className="welcome-text">Welcome to UDIN DIN DIN DON</div>
            <div className="solana-text">ON SOLANA</div>
            <div className="loader-container">
              <div className="loader"></div>
              <div className="loader-progress"></div>
              <div className="percentage">{progress}%</div>
            </div>

            <div className="flex flex-col justify-center items-center w-full">
              <div className="flex flex-col justify-start items-start bg-[#ffffff10] rounded-full w-[200px] h-[2px] object-cover overflow-hidden">
                <div
                  className={`flex flex-col h-[2px] bg-[#ff8c00] shadow-sm shadow-[#ff8c00]`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
