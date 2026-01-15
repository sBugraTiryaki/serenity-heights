interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function LandmarkIcon({
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
      {/* Classical architecture - elegant columns */}
      {/* Pediment */}
      <path
        d="M8 18L24 6l16 12"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Top beam */}
      <path
        d="M6 18h36"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Columns */}
      <path d="M12 18v20" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M20 18v20" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M28 18v20" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M36 18v20" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* Column capitals */}
      <path d="M10 18h4" stroke="currentColor" strokeWidth={strokeWidth * 0.8} strokeLinecap="round" opacity="0.7" />
      <path d="M18 18h4" stroke="currentColor" strokeWidth={strokeWidth * 0.8} strokeLinecap="round" opacity="0.7" />
      <path d="M26 18h4" stroke="currentColor" strokeWidth={strokeWidth * 0.8} strokeLinecap="round" opacity="0.7" />
      <path d="M34 18h4" stroke="currentColor" strokeWidth={strokeWidth * 0.8} strokeLinecap="round" opacity="0.7" />
      {/* Base */}
      <path
        d="M6 38h36"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M4 42h40"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
