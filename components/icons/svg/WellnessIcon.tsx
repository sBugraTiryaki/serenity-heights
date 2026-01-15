interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function WellnessIcon({
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
      {/* Lotus flower - symbol of wellness */}
      {/* Center petal */}
      <path
        d="M24 8c0 8-6 16-6 24h12c0-8-6-16-6-24"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Left petal */}
      <path
        d="M18 32c-4-4-12-8-12-8s4 12 12 8"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
      {/* Right petal */}
      <path
        d="M30 32c4-4 12-8 12-8s-4 12-12 8"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
      {/* Outer left petal */}
      <path
        d="M14 34c-6-2-10-2-10-2s2 8 10 6"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Outer right petal */}
      <path
        d="M34 34c6-2 10-2 10-2s-2 8-10 6"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Base line */}
      <path
        d="M12 40h24"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
