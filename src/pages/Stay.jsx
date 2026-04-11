import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlannerShell from "../components/PlannerShell";
import ProgressBar from "../components/ProgressBar";
import Stars from "../components/Stars";

const stayCards = [
  { icon: "🛏️", name: "Hostel", price: "₹350/night", stars: 2 },
  { icon: "🏨", name: "3-star hotel", price: "₹1,800/night", stars: 3 },
  { icon: "🏠", name: "Guesthouse", price: "₹500/night", stars: 3 },
  { icon: "🏕️", name: "Camp stay", price: "₹600/night", stars: 4 },
];

const Stay = () => {
  const [selected, setSelected] = useState("rec");
  const navigate = useNavigate();
  return (
    <PlannerShell
      mobileHeaderLeft={<span className="back-link" onClick={() => navigate("/travel")}>← Back</span>}
      mobileHeaderRight={<span className="header-action" onClick={() => navigate("/plan")}>Skip all</span>}
      footer={(
        <div className="sticky-bottom">
          <div className="planner-cta-row">
            <button type="button" className="cta-btn" onClick={() => navigate("/food")}>Confirm stay →</button>
          </div>
          <div className="skip-link" style={{ textAlign: "center" }} onClick={() => navigate("/food")}>Skip this step</div>
        </div>
      )}
    >
      <div className="planner-container--stay planner-stay-grid-wrap planner-stack">
        <ProgressBar activeStep={1} />

        <div className="d-page-meta">
          <span className="d-step-label">Step 3 of 5</span>
          <h1 className="planner-page-title">Where will you stay?</h1>
          <p className="planner-page-sub">Manali · 4 nights</p>
        </div>

        <div className="planner-section-label">Recommended</div>
        <div
          className={`d-stay-rec${selected === "rec" ? " d-stay-rec--selected" : ""}`}
          onClick={() => setSelected("rec")}
        >
          <div className="d-stay-rec-body">
            <div className="d-stay-rec-info">
              <div className="d-stay-rec-name">Budget hotel (central)</div>
              <div className="d-stay-rec-sub">Mall Road area · AC · WiFi</div>
              <Stars filled={3} />
            </div>
            <div className="d-stay-rec-right">
              <span className="d-best-badge">Best fit</span>
              <div className="travel-opt-price" style={{ marginTop: 8 }}>₹700/night</div>
              <div className="travel-opt-dur">4 nights = ₹2,800</div>
            </div>
          </div>
          <div className={`radio-circle${selected === "rec" ? " on" : ""}`} style={{ marginTop: 4 }} />
        </div>

        <div className="planner-section-label" style={{ marginTop: "0.5rem" }}>Other options</div>
        <div className="d-stay-grid">
          {stayCards.map((c) => (
            <div
              key={c.name}
              className={`d-stay-card${selected === c.name ? " d-stay-card--selected" : ""}`}
              onClick={() => setSelected(c.name)}
            >
              <div className="stay-card-icon">{c.icon}</div>
              <div className="stay-card-name">{c.name}</div>
              <div className="stay-card-price">{c.price}</div>
              <Stars filled={c.stars} />
            </div>
          ))}
        </div>
      </div>
    </PlannerShell>
  );
};

export default Stay;
