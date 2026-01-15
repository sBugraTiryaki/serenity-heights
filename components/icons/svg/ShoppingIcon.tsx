interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function ShoppingIcon({
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
      {/* Elegant shopping bag */}
      {/* Bag body */}
      <path
        d="M10 16h28l-3 26H13L10 16z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Handles */}
      <path
        d="M18 16c0-6 2-10 6-10s6 4 6 10"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Decorative fold line */}
      <path
        d="M12 22h24"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.6}
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Brand mark - diamond */}
      <path
        d="M24 28l4 4-4 4-4-4z"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
    </svg>
  );
}
