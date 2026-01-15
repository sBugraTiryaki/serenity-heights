interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function AddressIcon({
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
      {/* House with address marker */}
      {/* Roof */}
      <path
        d="M6 22L24 8l18 14"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Walls */}
      <path
        d="M10 20v18h28V20"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Door */}
      <rect
        x="20"
        y="28"
        width="8"
        height="10"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      {/* Door handle */}
      <circle
        cx="26"
        cy="34"
        r="1"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.6}
        opacity="0.6"
      />
      {/* Window */}
      <rect
        x="30"
        y="24"
        width="5"
        height="5"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        opacity="0.7"
      />
      {/* Address plate */}
      <rect
        x="13"
        y="24"
        width="5"
        height="5"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        opacity="0.7"
      />
    </svg>
  );
}
