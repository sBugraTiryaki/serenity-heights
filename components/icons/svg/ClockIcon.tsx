interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function ClockIcon({
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
      {/* Elegant clock face */}
      <circle
        cx="24"
        cy="24"
        r="18"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      {/* Inner circle */}
      <circle
        cx="24"
        cy="24"
        r="14"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.5}
        opacity="0.3"
      />
      {/* Hour markers */}
      <path d="M24 8v3" stroke="currentColor" strokeWidth={strokeWidth * 0.8} strokeLinecap="round" opacity="0.6" />
      <path d="M24 37v3" stroke="currentColor" strokeWidth={strokeWidth * 0.8} strokeLinecap="round" opacity="0.6" />
      <path d="M8 24h3" stroke="currentColor" strokeWidth={strokeWidth * 0.8} strokeLinecap="round" opacity="0.6" />
      <path d="M37 24h3" stroke="currentColor" strokeWidth={strokeWidth * 0.8} strokeLinecap="round" opacity="0.6" />
      {/* Hands */}
      <path
        d="M24 24V14"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M24 24l6 6"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
      />
      {/* Center dot */}
      <circle
        cx="24"
        cy="24"
        r="1.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
