"use client";

import { AuthProvider } from "@/contexts/AuthContext";
import { ReactNode, useEffect, useState } from "react";
import Background from "./Background";

export default function MainLayout({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);

  return (
    <main className="z-10 relative flex flex-col justify-start items-center w-full overflow-auto">
      <AuthProvider>
        <div className="z-10 flex flex-col justify-start items-center w-full">
          <Background />
          {children}
        </div>
      </AuthProvider>
    </main>
  );
}
