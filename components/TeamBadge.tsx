import { Sport } from "@/lib/types";

interface TeamBadgeProps {
  sport: Sport;
  primaryColor: string;
  secondaryColor: string;
  size?: number;
}

export default function TeamBadge({
  sport,
  primaryColor,
  secondaryColor,
  size = 36,
}: TeamBadgeProps) {
  if (sport === "NFL") {
    return <HelmetIcon primary={primaryColor} secondary={secondaryColor} size={size} />;
  }
  return (
    <JerseyIcon
      primary={primaryColor}
      secondary={secondaryColor}
      size={size}
      sleeveless={sport === "NBA"}
    />
  );
}

function JerseyIcon({
  primary,
  secondary,
  size,
  sleeveless,
}: {
  primary: string;
  secondary: string;
  size: number;
  sleeveless: boolean;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      {/* Ärmel (bei Basketball/NBA weggelassen -> ärmellos) */}
      {!sleeveless && (
        <>
          <polygon points="10,10 2,14 2,21 10,18" fill={primary} />
          <polygon points="30,10 38,14 38,21 30,18" fill={primary} />
        </>
      )}
      {/* Torso */}
      <rect x="10" y="9" width="20" height="27" rx="3" fill={primary} />
      {/* Kragen */}
      <circle cx="20" cy="9" r="4" fill={secondary} />
      {/* Saum */}
      <rect x="10" y="31" width="20" height="5" rx="1.5" fill={secondary} />
    </svg>
  );
}

function HelmetIcon({
  primary,
  secondary,
  size,
}: {
  primary: string;
  secondary: string;
  size: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      {/* Helmschale */}
      <ellipse cx="18" cy="20" rx="15" ry="14" fill={primary} />
      {/* Mittelstreifen */}
      <rect x="15" y="6" width="6" height="28" rx="3" fill={secondary} />
      {/* Gitter-Maske */}
      <g stroke={secondary} strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M31,15 L38,15 L38,27 L31,27" />
        <line x1="31" y1="19" x2="38" y2="19" />
        <line x1="31" y1="23" x2="38" y2="23" />
      </g>
    </svg>
  );
}
