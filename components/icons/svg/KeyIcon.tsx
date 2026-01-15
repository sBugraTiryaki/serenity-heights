interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function KeyIcon({
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
      {/* Elegant vintage key */}
      {/* Bow (decorative head) */}
      <circle
        cx="14"
        cy="14"
        r="8"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <circle
        cx="14"
        cy="14"
        r="4"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        opacity="0.6"
      />
      {/* Shaft */}
      <path
        d="M20 20L38 38"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Bit (teeth) */}
      <path
        d="M32 32l4-4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M36 36l4-4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Tip */}
      <path
        d="M38 38l2 2"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}
