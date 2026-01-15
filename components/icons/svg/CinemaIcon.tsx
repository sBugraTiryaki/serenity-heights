interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function CinemaIcon({
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
      {/* Film reel / projector inspired */}
      <circle
        cx="24"
        cy="24"
        r="14"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <circle
        cx="24"
        cy="24"
        r="4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      {/* Sprocket holes */}
      <circle cx="24" cy="12" r="2" stroke="currentColor" strokeWidth={strokeWidth * 0.8} />
      <circle cx="24" cy="36" r="2" stroke="currentColor" strokeWidth={strokeWidth * 0.8} />
      <circle cx="12" cy="24" r="2" stroke="currentColor" strokeWidth={strokeWidth * 0.8} />
      <circle cx="36" cy="24" r="2" stroke="currentColor" strokeWidth={strokeWidth * 0.8} />
      {/* Diagonal holes */}
      <circle cx="15.5" cy="15.5" r="1.5" stroke="currentColor" strokeWidth={strokeWidth * 0.6} opacity="0.7" />
      <circle cx="32.5" cy="15.5" r="1.5" stroke="currentColor" strokeWidth={strokeWidth * 0.6} opacity="0.7" />
      <circle cx="15.5" cy="32.5" r="1.5" stroke="currentColor" strokeWidth={strokeWidth * 0.6} opacity="0.7" />
      <circle cx="32.5" cy="32.5" r="1.5" stroke="currentColor" strokeWidth={strokeWidth * 0.6} opacity="0.7" />
    </svg>
  );
}
