interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function CalendarIcon({
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
      {/* Elegant calendar */}
      {/* Main frame */}
      <rect
        x="6"
        y="10"
        width="36"
        height="32"
        rx="2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      {/* Top bar */}
      <path
        d="M6 18h36"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Hanging rings */}
      <path d="M16 6v8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M32 6v8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* Date dots - minimalist */}
      <circle cx="16" cy="26" r="1" stroke="currentColor" strokeWidth={strokeWidth * 0.6} opacity="0.5" />
      <circle cx="24" cy="26" r="1" stroke="currentColor" strokeWidth={strokeWidth * 0.6} opacity="0.5" />
      <circle cx="32" cy="26" r="1" stroke="currentColor" strokeWidth={strokeWidth * 0.6} opacity="0.5" />
      <circle cx="16" cy="34" r="1" stroke="currentColor" strokeWidth={strokeWidth * 0.6} opacity="0.5" />
      <circle cx="24" cy="34" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="32" cy="34" r="1" stroke="currentColor" strokeWidth={strokeWidth * 0.6} opacity="0.5" />
    </svg>
  );
}
