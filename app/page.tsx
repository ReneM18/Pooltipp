"use client";

import MatchCard from "@/components/MatchCard";
import { mockMatches } from "@/lib/mockData";
import { useUser } from "@/lib/UserContext";

export default function DashboardPage() {
  const { freeStars, spendStars } = useUser();

  function handleSubmitTip({ stake }: { stake: number }) {
    spendStars(stake);
  }

  return (
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
  );
}
