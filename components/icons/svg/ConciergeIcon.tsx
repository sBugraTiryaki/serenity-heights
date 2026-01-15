interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function ConciergeIcon({
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
      {/* Service bell - elegant version */}
      {/* Bell dome */}
      <ellipse
        cx="24"
        cy="28"
        rx="16"
        ry="6"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <path
        d="M10 28c0-10 6-16 14-16s14 6 14 16"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Button on top */}
      <circle
        cx="24"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <line
        x1="24"
        y1="9"
        x2="24"
        y2="6"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Base */}
      <path
        d="M8 34h32"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M12 38h24"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
