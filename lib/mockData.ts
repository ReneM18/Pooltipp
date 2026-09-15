import { Match, UserProfile } from "./types";

export const mockUser: UserProfile = {
  id: "demo-user-1",
  displayName: "Alex",
  freeStars: 240,
  points: 1180,
};

export const mockMatches: Match[] = [
  {
    id: "match-1",
    competition: "Bundesliga",
    matchday: 7,
    kickoff: "2026-09-20T15:30:00+02:00",
    homeTeam: "Bayern München",
    awayTeam: "Borussia Dortmund",
  },
  {
    id: "match-2",
    competition: "Bundesliga",
    matchday: 7,
    kickoff: "2026-09-20T18:30:00+02:00",
    homeTeam: "RB Leipzig",
    awayTeam: "Bayer Leverkusen",
  },
  {
    id: "match-3",
    competition: "Bundesliga",
    matchday: 7,
    kickoff: "2026-09-21T17:30:00+02:00",
    homeTeam: "Eintracht Frankfurt",
    awayTeam: "VfB Stuttgart",
  },
];
