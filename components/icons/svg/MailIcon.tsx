interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function MailIcon({
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
      {/* Elegant envelope */}
      {/* Envelope body */}
      <rect
        x="4"
        y="10"
        width="40"
        height="28"
        rx="1"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      {/* Flap */}
      <path
        d="M4 10l20 16 20-16"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bottom fold lines */}
      <path
        d="M4 38l14-12"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.6}
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M44 38l-14-12"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.6}
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}
