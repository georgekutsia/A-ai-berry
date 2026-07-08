export default function BerryMascot() {
  return (
    <svg className="berry-mascot" viewBox="0 0 260 300" aria-hidden="true">
      <defs>
        <filter id="berryGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#berryGlow)" className="berry-mascot__float">
        <g className="berry-mascot__leaf-group">
          <path
            d="M130 18c22 4 46 22 48 52-18 4-33-2-45-16-9-10-12-21-11-36h8Z"
            className="berry-mascot__leaf berry-mascot__leaf--main"
          />
          <path
            d="M128 18c-26 6-44 24-48 52 18 4 34-2 46-16 8-10 12-21 10-36h-8Z"
            className="berry-mascot__leaf berry-mascot__leaf--accent"
          />
        </g>
        <path
          d="M130 62c56 0 92 42 92 98 0 63-40 104-92 104S38 223 38 160c0-56 36-98 92-98Z"
          className="berry-mascot__body"
        />
        <g className="berry-mascot__face">
          <ellipse cx="95" cy="157" rx="10" ry="14" className="berry-mascot__eye berry-mascot__eye--left" />
          <ellipse cx="165" cy="157" rx="10" ry="14" className="berry-mascot__eye berry-mascot__eye--right" />
          <path d="M94 201c11 16 61 16 72 0" className="berry-mascot__smile" />
        </g>
        <g className="berry-mascot__feet">
          <ellipse cx="86" cy="259" rx="32" ry="24" className="berry-mascot__foot berry-mascot__foot--left" />
          <ellipse cx="174" cy="259" rx="32" ry="24" className="berry-mascot__foot berry-mascot__foot--right" />
        </g>
        <g className="berry-mascot__sparks">
          <path d="M16 86c20 8 33 24 39 48" className="berry-mascot__spark berry-mascot__spark--left" />
          <path d="M244 86c-20 8-33 24-39 48" className="berry-mascot__spark berry-mascot__spark--right" />
          <path d="M36 58c10 12 14 22 13 34" className="berry-mascot__spark berry-mascot__spark--left-top" />
          <path d="M224 58c-10 12-14 22-13 34" className="berry-mascot__spark berry-mascot__spark--right-top" />
        </g>
      </g>
    </svg>
  );
}
