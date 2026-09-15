"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { mockUser } from "@/lib/mockData";

interface UserContextValue {
  displayName: string;
  freeStars: number;
  points: number;
  spendStars: (amount: number) => boolean;
}

const UserContext = createContext<UserContextValue | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [freeStars, setFreeStars] = useState(mockUser.freeStars);
  const [points] = useState(mockUser.points);

  function spendStars(amount: number) {
    if (amount > freeStars) return false;
    setFreeStars((current) => current - amount);
    return true;
  }

  return (
    <UserContext.Provider
      value={{ displayName: mockUser.displayName, freeStars, points, spendStars }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser muss innerhalb von <UserProvider> verwendet werden");
  }
  return context;
}
