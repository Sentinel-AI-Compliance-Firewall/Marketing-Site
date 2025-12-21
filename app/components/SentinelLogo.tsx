"use client"

interface SentinelLogoProps {
  className?: string
  showText?: boolean
}

const SentinelLogo = ({ className = "h-10", showText = true }: SentinelLogoProps) => (
  <svg viewBox={showText ? "0 0 280 50" : "0 0 50 50"} className={className}>
    <defs>
      <filter id="logoGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFD700"/>
        <stop offset="100%" stopColor="#FFA500"/>
      </linearGradient>
    </defs>

    {/* Icon: Two angular brackets facing right with stop line */}
    <g transform={showText ? "translate(2, 5)" : "translate(5, 5)"}>
      {/* First bracket - dimmer */}
      <path
        d="M0 20 L12 10 L0 0"
        fill="none"
        stroke="#FFD700"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.4"
        transform="translate(0, 10)"
      />
      {/* Second bracket - brighter with glow */}
      <path
        d="M12 20 L24 10 L12 0"
        fill="none"
        stroke="#FFD700"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#logoGlow)"
        transform="translate(0, 10)"
      />
      {/* Vertical stop line */}
      <line
        x1="32" y1="8" x2="32" y2="32"
        stroke="#FFD700"
        strokeWidth="2.5"
        strokeLinecap="round"
        filter="url(#logoGlow)"
      />
    </g>

    {showText && (
      <>
        {/* SENTINEL AI text */}
        <text
          x="45"
          y="22"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="20"
          fontWeight="700"
          fill="#ffffff"
          letterSpacing="2"
        >
          SENTINEL
          <tspan fill="url(#goldGradient)" fontWeight="400" dx="6">AI</tspan>
        </text>

        {/* Compliance Firewall subtitle */}
        <text
          x="45"
          y="38"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="9"
          fontWeight="500"
          fill="#FFD700"
          letterSpacing="3"
          opacity="0.9"
        >
          COMPLIANCE FIREWALL
        </text>

        {/* Subtle accent line */}
        <line
          x1="45" y1="42" x2="175" y2="42"
          stroke="#FFD700"
          strokeWidth="0.5"
          strokeOpacity="0.3"
        />
      </>
    )}
  </svg>
)

export default SentinelLogo
