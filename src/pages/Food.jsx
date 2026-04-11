import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlannerShell from "../components/PlannerShell";
import ProgressBar from "../components/ProgressBar";

const tiers = [
  { label: "Budget", budget: "₹350–500", meals: "Dhabas, local eateries", total: "~₹2,000 total", bar: "28%", perDay: "₹350/day" },
  { label: "Comfort", budget: "₹600–800", meals: "Cafés, mid-range restaurants", total: "~₹3,500 total", bar: "55%", perDay: "₹700/day" },
  { label: "Premium", budget: "₹1,000–1,500", meals: "Restaurants, fine dining", total: "~₹6,000 total", bar: "90%", perDay: "₹1,200/day" },
];

const Food = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const t = tiers[active];
  return (
    <PlannerShell
      mobileHeaderLeft={<span className="back-link" onClick={() => navigate("/stay")}>← Back</span>}
      mobileHeaderRight={<span className="header-action" onClick={() => navigate("/plan")}>Skip all</span>}
      footer={(
        <div className="sticky-bottom">
          <div className="planner-cta-row">
            <button type="button" className="cta-btn" onClick={() => navigate("/local")}>Confirm food preference →</button>
          </div>
          <div className="skip-link" style={{ textAlign: "center" }} onClick={() => navigate("/local")}>Skip this step</div>
        </div>
      )}
    >
      <div className="planner-container--food planner-food-pills planner-food-summary planner-stack">
        <ProgressBar activeStep={2} />

        <div className="d-page-meta">
          <span className="d-step-label">Step 4 of 5</span>
          <h1 className="planner-page-title">Food preference</h1>
          <p className="planner-page-sub">Sets your daily food budget. You choose where to eat.</p>
        </div>

        <div className="d-food-pills">
          {tiers.map((tier, i) => (
            <button
              key={tier.label}
              type="button"
              className={`d-food-pill${active === i ? " d-food-pill--active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="d-food-pill-label">{tier.label}</span>
              <span className="d-food-pill-sub">{tier.perDay}</span>
            </button>
          ))}
        </div>

        <div className="d-food-card">
          <div className="d-food-card-row">
            <span className="seg-detail-label">Daily food budget</span>
            <span className="seg-detail-val">{t.budget}</span>
          </div>
          <div className="d-food-card-row">
            <span className="seg-detail-label">Typical meals</span>
            <span className="seg-detail-val">{t.meals}</span>
          </div>
          <div className="d-food-card-row">
            <span className="seg-detail-label">For 5 days</span>
            <span className="seg-detail-val" style={{ color: "var(--blue)" }}>{t.total}</span>
          </div>
          <div className="d-food-bar-track">
            <div className="d-food-bar-fill" style={{ width: t.bar }} />
          </div>
        </div>

        <div className="d-food-notice">
          Budget mode recommended — keeps ₹10,800 for transport, stay, and local travel.
        </div>
      </div>
    </PlannerShell>
  );
};

export default Food;
