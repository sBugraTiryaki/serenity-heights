interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function GarageIcon({
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
      {/* Luxury car silhouette - side view */}
      {/* Body */}
      <path
        d="M8 30c0 0 2-8 8-8h16c6 0 8 8 8 8"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Roof line */}
      <path
        d="M14 22c0 0 2-6 10-6s10 6 10 6"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Bottom line */}
      <path
        d="M6 30h36"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Wheels */}
      <circle
        cx="14"
        cy="32"
        r="4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <circle
        cx="14"
        cy="32"
        r="1.5"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.6}
        opacity="0.6"
      />
      <circle
        cx="34"
        cy="32"
        r="4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <circle
        cx="34"
        cy="32"
        r="1.5"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.6}
        opacity="0.6"
      />
      {/* Electric indicator */}
      <path
        d="M22 38l2-4 2 4"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}
