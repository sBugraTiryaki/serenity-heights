interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function AirportIcon({
  size = 48,
  className = '',
  strokeWidth = 0.75,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Elegant airplane silhouette */}
      {/* Fuselage */}
      <path
        d="M4 24h36c2 0 4-1 4-2s-2-2-4-2H4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Main wing */}
      <path
        d="M18 22c-4-8-6-12-6-12s-2 0-2 2 2 6 4 10"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 22c-4 8-6 12-6 12s-2 0-2-2 2-6 4-10"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Tail */}
      <path
        d="M38 22c2-4 4-8 4-8s1 0 1 1-1 4-2 7"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
      <path
        d="M38 22c2 4 4 8 4 8s1 0 1-1-1-4-2-7"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
      {/* Window line */}
      <path
        d="M10 22h20"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.5}
        strokeLinecap="round"
        opacity="0.4"
        strokeDasharray="2 3"
      />
    </svg>
  );
}
