import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlannerShell from "../components/PlannerShell";
import ProgressBar from "../components/ProgressBar";

const options = [
  { icon: "✈️", bg: true, name: "Flight", chip: "Best value", sub: "IndiGo · 6E-234 · 2h 40m", price: "₹3,200", dur: "Non-stop" },
  { icon: "✈️", bg: false, name: "Flight", sub: "Air India · AI-891 · 3h 10m", price: "₹4,100", dur: "1 stop" },
  { icon: "🚂", bg: false, name: "Train", sub: "Himachal Exp · 2 days", price: "₹1,400", dur: "Sleeper AC" },
  { icon: "🚌", bg: false, name: "Bus", sub: "HRTC Volvo · 36h", price: "₹900", dur: "Overnight" },
];

const Travel = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  return (
    <PlannerShell
      mobileHeaderLeft={<span className="back-link" onClick={() => navigate("/mode-select")}>← Back</span>}
      mobileHeaderRight={<span className="header-action" onClick={() => navigate("/plan")}>Skip all</span>}
      footer={(
        <div className="sticky-bottom">
          <div className="planner-cta-row">
            <button type="button" className="cta-btn" onClick={() => navigate("/stay")}>Confirm transport →</button>
          </div>
          <div className="skip-link" style={{ textAlign: "center" }} onClick={() => navigate("/stay")}>Skip this step</div>
        </div>
      )}
    >
      <div className="planner-container--travel planner-stack">
        <ProgressBar activeStep={0} />

        <div className="d-page-meta">
          <span className="d-step-label">Step 2 of 5</span>
          <h1 className="planner-page-title">How will you travel?</h1>
          <p className="planner-page-sub">Kolkata → Manali · Outbound journey</p>
        </div>

        <div className="planner-travel-options">
          <div className="planner-section-label">Recommended for you</div>
          {options.map((o, i) => (
            <div key={i}>
              {i === 1 && <div className="planner-section-label" style={{ marginTop: "1rem" }}>Other options</div>}
              <div
                className={`planner-opt-with-badge d-opt-card${selected === i ? " d-opt-card--selected" : ""}${i === 0 ? " d-opt-card--rec" : ""}`}
                onClick={() => setSelected(i)}
              >
                {i === 0 && <span className="planner-corner-badge">Recommended</span>}
                <div className={`travel-opt-icon${o.bg ? " blue-bg" : ""}`}>{o.icon}</div>
                <div className="travel-opt-info">
                  <div className="travel-opt-name">
                    {o.name}
                    {o.chip && <span className="rec-chip">{o.chip}</span>}
                  </div>
                  <div className="travel-opt-sub">{o.sub}</div>
                </div>
                <div className="d-opt-price-col">
                  <div className="travel-opt-price">{o.price}</div>
                  <div className="travel-opt-dur">{o.dur}</div>
                </div>
                <div className={`radio-circle${selected === i ? " on" : ""}`} />
              </div>
            </div>
          ))}
        </div>
        <p className="helper-text" style={{ marginTop: 8 }}>You can change this later from the final plan</p>
      </div>
    </PlannerShell>
  );
};

export default Travel;
