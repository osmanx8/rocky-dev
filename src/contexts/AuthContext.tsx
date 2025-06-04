"use client";
import { createContext, useContext, useEffect, useState } from "react";

// Define the context type
interface AuthContextType {
  loadedIn: boolean;
  Loaded: () => void;
  Loading: () => void;
  count: Number;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loadedIn, IsloadedIn] = useState<boolean>(false);
  let count = 0;
  // Function to log in
  const Loaded = () => {
    IsloadedIn(true);
  };
  const Loading = () => {
    IsloadedIn(false);
  };

  return (
    <AuthContext.Provider value={{ Loaded, count, Loading, loadedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
