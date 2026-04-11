import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ROUTES = [
  { icon: "🏔️", name: "Manali", days: "3–5 days", budget: "₹8,000+", tag: "Hill station" },
  { icon: "🌊", name: "Goa",    days: "4–6 days", budget: "₹12,000+", tag: "Beach" },
  { icon: "🏯", name: "Jaipur", days: "3–4 days", budget: "₹10,000+", tag: "Heritage" },
  { icon: "🌿", name: "Coorg",  days: "3 days",   budget: "₹9,000+",  tag: "Nature" },
  { icon: "🏙️", name: "Mumbai", days: "4 days",   budget: "₹14,000+", tag: "City" },
];

const HOW = [
  { n: "01", title: "Enter trip details", desc: "Set your origin, destination, days and budget." },
  { n: "02", title: "Customize preferences", desc: "Pick transport, stay, food and local travel." },
  { n: "03", title: "Get your itinerary", desc: "Receive a day-by-day budget-optimised plan." },
];

const Home = () => {
  const navigate = useNavigate();
  const [planType, setPlanType] = useState("trip");
  const [pref, setPref]         = useState("balanced");
  const [transport, setTransport] = useState("any");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fillRoute = (r) => {
    /* no-op — form is display-only per spec; routing unchanged */
  };

  return (
    <div className="h-page-shell">

      {/* ── HEADER ── */}
      <header className="h-header">
        <span className="logo-text">travel<span className="logo-dot">blurry</span></span>

        {/* desktop nav */}
        <nav className="h-nav" aria-label="Main">
          <a href="/plan-year" className="h-nav-link">Plan My Year</a>
          <a href="/mode-select" className="h-nav-link">How it works</a>
          <button className="h-nav-cta" onClick={() => navigate("/mode-select")}>Plan Trip</button>
        </nav>

        {/* mobile hamburger */}
        <button
          className="h-hamburger"
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(o => !o)}
        >
          <span className={`hm-line${mobileMenuOpen ? " open-top" : ""}`}></span>
          <span className={`hm-line${mobileMenuOpen ? " open-mid" : ""}`}></span>
          <span className={`hm-line${mobileMenuOpen ? " open-bot" : ""}`} style={{ width: "70%" }}></span>
        </button>
      </header>

      {/* mobile drawer */}
      {mobileMenuOpen && (
        <div className="h-mobile-menu">
          <a href="/plan-year"   className="h-mm-link" onClick={() => setMobileMenuOpen(false)}>Plan My Year</a>
          <a href="/mode-select" className="h-mm-link" onClick={() => setMobileMenuOpen(false)}>How it works</a>
          <button className="cta-btn" style={{ marginTop: 8 }} onClick={() => { setMobileMenuOpen(false); navigate("/mode-select"); }}>Plan Trip</button>
        </div>
      )}

      {/* ── MAIN SCROLL ── */}
      <main className="h-main">
        <div className="h-content">

          {/* ── HERO + PLANNER GRID ── */}
          <section className="h-hero-grid">

            {/* LEFT — hero */}
            <div className="h-hero-left">
              <span className="hero-tag">Smart trip planner</span>
              <h1 className="h-h1">Build your trip step-by-step within your budget</h1>
              <p className="h-sub">Choose travel, stay and preferences — or let us plan automatically.</p>

              {/* trust indicators */}
              <ul className="h-trust">
                <li className="h-trust-item"><span className="h-trust-dot"></span>No booking required</li>
                <li className="h-trust-item"><span className="h-trust-dot"></span>Budget-first planning</li>
                <li className="h-trust-item"><span className="h-trust-dot"></span>Instant itinerary</li>
              </ul>

              {/* plan-type cards */}
              <div className="h-plan-cards">
                <button
                  className={`h-plan-card${planType === "trip" ? " h-plan-card--active" : ""}`}
                  onClick={() => setPlanType("trip")}
                >
                  <span className="h-plan-icon">🗺️</span>
                  <span className="h-plan-title">Plan My Trip</span>
                  <span className="h-plan-desc">Step-by-step itinerary builder</span>
                </button>
                <button
                  className={`h-plan-card${planType === "year" ? " h-plan-card--active" : ""}`}
                  onClick={() => setPlanType("year")}
                >
                  <span className="h-plan-icon">📅</span>
                  <span className="h-plan-title">Plan My Year</span>
                  <span className="h-plan-desc">Optimise leaves and holidays</span>
                </button>
              </div>
            </div>

            {/* RIGHT — planner card */}
            <div className="h-planner-wrap">
              <div className="h-planner-card">
                <p className="h-planner-label">
                  {planType === "trip" ? "Where are you going?" : "Plan your year"}
                </p>

                {/* row 1 */}
                <div className="h-form-row">
                  <div className="h-field">
                    <label className="h-field-label">From</label>
                    <div className="h-field-val h-field-val--placeholder">Kolkata</div>
                  </div>
                  <div className="h-field">
                    <label className="h-field-label">To</label>
                    <div className="h-field-val h-field-val--placeholder">Destination</div>
                  </div>
                </div>

                {/* row 2 */}
                <div className="h-form-row">
                  <div className="h-field">
                    <label className="h-field-label">Days</label>
                    <div className="h-field-val">5 days</div>
                    <span className="h-field-hint">Total trip duration</span>
                  </div>
                  <div className="h-field">
                    <label className="h-field-label">Budget</label>
                    <div className="h-field-val">₹15,000</div>
                    <span className="h-field-hint">Total trip budget</span>
                  </div>
                </div>

                {/* row 3 — dropdowns */}
                <div className="h-form-row">
                  <div className="h-field">
                    <label className="h-field-label">Travel preference</label>
                    <select
                      className="h-select"
                      value={pref}
                      onChange={e => setPref(e.target.value)}
                    >
                      <option value="cheapest">Cheapest</option>
                      <option value="fastest">Fastest</option>
                      <option value="balanced">Balanced</option>
                    </select>
                  </div>
                  <div className="h-field">
                    <label className="h-field-label">Transport</label>
                    <select
                      className="h-select"
                      value={transport}
                      onChange={e => setTransport(e.target.value)}
                    >
                      <option value="any">Any</option>
                      <option value="flight">Flight</option>
                      <option value="train">Train</option>
                      <option value="bus">Bus</option>
                    </select>
                  </div>
                </div>

                <button
                  className="h-cta"
                  onClick={() => navigate("/mode-select")}
                >
                  Start Planning →
                </button>
              </div>
            </div>
          </section>

          {/* ── HOW IT WORKS ── */}
          <section className="h-how">
            <p className="h-section-eyebrow">How it works</p>
            <div className="h-how-steps">
              {HOW.map(s => (
                <div key={s.n} className="h-how-step">
                  <span className="h-how-num">{s.n}</span>
                  <div>
                    <span className="h-how-title">{s.title}</span>
                    <span className="h-how-desc">{s.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── POPULAR ROUTES ── */}
          <section className="h-routes-section">
            <p className="h-section-eyebrow">Popular routes</p>
            <div className="h-routes-scroll">
              {ROUTES.map(r => (
                <button
                  key={r.name}
                  className="h-route-card"
                  onClick={() => fillRoute(r)}
                >
                  <span className="h-route-icon">{r.icon}</span>
                  <span className="h-route-tag">{r.tag}</span>
                  <span className="h-route-name">{r.name}</span>
                  <span className="h-route-meta">{r.days}</span>
                  <span className="h-route-budget">{r.budget}</span>
                </button>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Home;
