const Logo = () => (
  <div className="logo">
    <svg
      className="logo-mark"
      viewBox="0 0 220 120"
      role="img"
      aria-labelledby="logo-title logo-desc"
    >
      <title id="logo-title">North Star Roofing Logo</title>
      <desc id="logo-desc">
        Stylized roofline with a guiding star above the peak.
      </desc>
      <defs>
        <linearGradient id="roofGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e6f0ff" />
          <stop offset="100%" stopColor="#8ab9ff" />
        </linearGradient>
        <linearGradient id="starGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#fff4d6" />
          <stop offset="100%" stopColor="#ffc857" />
        </linearGradient>
        <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M15 78 L80 26 L110 50 L140 26 L205 78"
        fill="none"
        stroke="url(#roofGradient)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M80 76 L80 108 L110 96 L140 108 L140 46"
        fill="none"
        stroke="#f3f6fb"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="110"
        cy="20"
        r="18"
        fill="url(#starGradient)"
        filter="url(#starGlow)"
      />
      <path
        d="M110 0 L117 18 L136 18 L120 28 L127 46 L110 35 L93 46 L100 28 L84 18 L103 18 Z"
        fill="#fff9e5"
      />
    </svg>
    <div className="wordmark">
      <span className="wordmark-line primary">North Star</span>
      <span className="wordmark-line secondary">Roofing</span>
    </div>
    <p className="tagline">Guiding your home to peak protection.</p>
  </div>
);

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="aurora" />
        <div className="hero-content">
          <Logo />
          <div className="cta-panel">
            <p>
              Precision craftsmanship with a guiding touch. North Star Roofing
              delivers enduring roofs that shine in every season.
            </p>
            <button>Book a Consultation</button>
          </div>
        </div>
      </section>
      <section className="palette">
        <h2>Brand Palette</h2>
        <div className="swatches">
          <div className="swatch" style={{ background: "#0b1633" }}>
            #0B1633
          </div>
          <div className="swatch" style={{ background: "#1f3b70" }}>
            #1F3B70
          </div>
          <div className="swatch" style={{ background: "#ffc857", color: "#0b1633" }}>
            #FFC857
          </div>
          <div className="swatch" style={{ background: "#e6f0ff", color: "#0b1633" }}>
            #E6F0FF
          </div>
        </div>
      </section>
    </main>
  );
}
