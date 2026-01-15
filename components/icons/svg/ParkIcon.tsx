interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function ParkIcon({
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
      {/* Elegant tree */}
      {/* Trunk */}
      <path
        d="M24 28v14"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Foliage layers - organic shape */}
      <path
        d="M24 6c-10 4-14 12-14 16 0 6 6 10 14 10s14-4 14-10c0-4-4-12-14-16z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner detail */}
      <path
        d="M24 12c-6 3-8 8-8 10 0 4 4 6 8 6s8-2 8-6c0-2-2-7-8-10z"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.6}
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Ground */}
      <path
        d="M16 42h16"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
