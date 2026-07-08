export default function BowlIllustration({ variant = 'small' }) {
  return (
    <svg
      className={`bowl-illustration bowl-illustration--${variant}`}
      viewBox="0 0 180 120"
      aria-hidden="true"
    >
      <ellipse cx="90" cy="28" rx="64" ry="12" />
      <path d="M32 32c4 44 14 58 58 58s54-14 58-58" />
      <path d="M30 36c0 0 18 10 60 10s60-10 60-10" />
    </svg>
  );
}
