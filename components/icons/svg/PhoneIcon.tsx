interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function PhoneIcon({
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
      {/* Elegant vintage telephone receiver */}
      <path
        d="M12 8c-4 0-6 2-6 4 0 16 16 28 32 28 2 0 4-2 4-6l-8-4c-1 0-2 0-3 1l-4 4c-6-4-12-10-16-16l4-4c1-1 1-2 1-3L12 8z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Signal waves */}
      <path
        d="M30 6c4 2 8 6 10 10"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.6}
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M34 10c2 1 4 3 5 5"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.6}
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}
