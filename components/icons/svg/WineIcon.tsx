interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function WineIcon({
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
      {/* Elegant wine glass */}
      <path
        d="M24 6v4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Bowl */}
      <path
        d="M16 10c0 0-2 6-2 10 0 6 4.5 10 10 10s10-4 10-10c0-4-2-10-2-10"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Wine level */}
      <path
        d="M16.5 18c1.5 1 5 1.5 7.5 1.5s6-.5 7.5-1.5"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.7}
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Stem */}
      <path
        d="M24 30v10"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Base */}
      <path
        d="M18 40c0 1 2.5 2 6 2s6-1 6-2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
