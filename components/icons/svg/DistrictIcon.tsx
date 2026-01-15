interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function DistrictIcon({
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
      {/* Skyline - financial district */}
      {/* Tallest building - center */}
      <rect
        x="20"
        y="8"
        width="8"
        height="32"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      {/* Left building */}
      <rect
        x="8"
        y="18"
        width="10"
        height="22"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      {/* Right building */}
      <rect
        x="30"
        y="14"
        width="10"
        height="26"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      {/* Windows - subtle */}
      <path d="M22 14h4" stroke="currentColor" strokeWidth={strokeWidth * 0.5} opacity="0.4" />
      <path d="M22 20h4" stroke="currentColor" strokeWidth={strokeWidth * 0.5} opacity="0.4" />
      <path d="M22 26h4" stroke="currentColor" strokeWidth={strokeWidth * 0.5} opacity="0.4" />
      <path d="M22 32h4" stroke="currentColor" strokeWidth={strokeWidth * 0.5} opacity="0.4" />
      <path d="M11 24h4" stroke="currentColor" strokeWidth={strokeWidth * 0.5} opacity="0.4" />
      <path d="M11 30h4" stroke="currentColor" strokeWidth={strokeWidth * 0.5} opacity="0.4" />
      <path d="M33 20h4" stroke="currentColor" strokeWidth={strokeWidth * 0.5} opacity="0.4" />
      <path d="M33 28h4" stroke="currentColor" strokeWidth={strokeWidth * 0.5} opacity="0.4" />
      {/* Ground */}
      <path
        d="M4 40h40"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
