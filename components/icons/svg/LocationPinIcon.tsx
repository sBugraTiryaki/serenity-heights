interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function LocationPinIcon({
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
      {/* Elegant map pin */}
      <path
        d="M24 4c-8 0-14 6-14 14 0 10 14 26 14 26s14-16 14-26c0-8-6-14-14-14z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner circle */}
      <circle
        cx="24"
        cy="18"
        r="5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      {/* Center dot */}
      <circle
        cx="24"
        cy="18"
        r="1.5"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.6}
        opacity="0.6"
      />
    </svg>
  );
}
