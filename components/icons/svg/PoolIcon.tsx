interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function PoolIcon({
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
      {/* Infinity symbol representing endless pool */}
      <path
        d="M14 24c0-4.5 4-8 8-8 5 0 5 8 10 8 4 0 8-3.5 8-8s-4-8-8-8c-5 0-5 8-10 8-4 0-8-3.5-8-8"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(0, 8)"
      />
      {/* Water ripples */}
      <path
        d="M4 36c4 2 8-2 12 0s8-2 12 0 8-2 12 0 4-2 4-2"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M4 40c4 2 8-2 12 0s8-2 12 0 8-2 12 0 4-2 4-2"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.6}
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}
