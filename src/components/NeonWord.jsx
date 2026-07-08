function normalizeCharacter(character) {
  return character === ' ' ? '\u00a0' : character;
}

export default function NeonWord({ text, className = '', tone = 'pink' }) {
  return (
    <span className={`neon-word neon-word--${tone} ${className}`.trim()} aria-label={text}>
      {Array.from(text).map((character, index) => (
        <span key={`${character}-${index}`} className="neon-word__letter" aria-hidden="true">
          {normalizeCharacter(character)}
        </span>
      ))}
    </span>
  );
}
