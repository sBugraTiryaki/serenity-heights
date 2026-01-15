interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function GardenIcon({
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
      {/* Elegant plant/leaf design */}
      {/* Main stem */}
      <path
        d="M24 42V20"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Central leaf */}
      <path
        d="M24 6c0 8-4 14-4 14s4 1 4 1 4-1 4-1S24 14 24 6"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Left branch */}
      <path
        d="M24 24c-8 0-14-4-14-4s1 4 1 4 -1 4-1 4 6-4 14-4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
      {/* Right branch */}
      <path
        d="M24 24c8 0 14-4 14-4s-1 4-1 4 1 4 1 4-6-4-14-4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
      {/* Ground line */}
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
