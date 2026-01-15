interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function SmartHomeIcon({
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
      {/* House outline */}
      <path
        d="M6 22L24 8l18 14"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 20v18h28V20"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Circuit/network pattern inside */}
      <circle
        cx="24"
        cy="28"
        r="6"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <circle
        cx="24"
        cy="28"
        r="2"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
      />
      {/* Connection lines */}
      <path
        d="M24 22v-4M24 34v4M18 28h-4M30 28h4"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.7}
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Corner nodes */}
      <circle cx="16" cy="22" r="1" stroke="currentColor" strokeWidth={strokeWidth * 0.6} opacity="0.5" />
      <circle cx="32" cy="22" r="1" stroke="currentColor" strokeWidth={strokeWidth * 0.6} opacity="0.5" />
      <circle cx="16" cy="34" r="1" stroke="currentColor" strokeWidth={strokeWidth * 0.6} opacity="0.5" />
      <circle cx="32" cy="34" r="1" stroke="currentColor" strokeWidth={strokeWidth * 0.6} opacity="0.5" />
    </svg>
  );
}
