"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import MatchCard from "@/components/MatchCard";
import { mockMatches, mockUser } from "@/lib/mockData";

export default function DashboardPage() {
  const [freeStars, setFreeStars] = useState(mockUser.freeStars);
  const [points, setPoints] = useState(mockUser.points);

  function handleSubmitTip({
    stake,
  }: {
    matchId: string;
    homeScore: number;
    awayScore: number;
    stake: number;
  }) {
    // MVP-Verhalten: Einsatz wird sofort vom Sterne-Guthaben abgezogen.
    // Punkte gibt es erst, sobald das echte Ergebnis feststeht (siehe
    // Erklärung zur Firestore-Datenstruktur im Chat).
    setFreeStars((current) => Math.max(0, current - stake));
  }

  return (
    <>
      <Navbar displayName={mockUser.displayName} freeStars={freeStars} points={points} />

      <main className="mx-auto max-w-3xl px-5 py-8">
        <div className="mb-6">
          <h1 className="font-display text-3xl font-bold text-ink">
            Deine Tipps für den Spieltag
          </h1>
          <p className="mt-1 text-sm text-muted">
            Setze deine Gratis-Sterne auf die kommenden Spiele.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {mockMatches.map((match) => (
            <MatchCard
              key={match.id}
              match={match}
              maxStake={Math.min(100, freeStars)}
              onSubmitTip={handleSubmitTip}
            />
          ))}
        </div>
      </main>
    </>
  );
}
