export interface Match {
  id: string;
  competition: string;
  matchday: number;
  kickoff: string; // ISO 8601 timestamp
  homeTeam: string;
  awayTeam: string;
}

export interface Tip {
  matchId: string;
  userId: string;
  predictedHomeScore: number;
  predictedAwayScore: number;
  stake: number; // eingesetzte Gratis-Sterne
  submittedAt: string; // ISO 8601 timestamp
}

export interface UserProfile {
  id: string;
  displayName: string;
  freeStars: number;
  points: number;
}
