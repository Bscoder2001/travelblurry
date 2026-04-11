import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlannerShell from "../components/PlannerShell";
import ProgressBar from "../components/ProgressBar";

const opts = [
  { icon: "🚶", bg: true, name: "Walking + auto", chip: "Recommended", sub: "Best for most Manali sightseeing spots", price: "₹200/day" },
  { icon: "🚕", bg: false, name: "Cab (Ola / Uber)", sub: "Comfortable, on-demand", price: "₹600/day" },
  { icon: "🛵", bg: false, name: "Bike rental", sub: "Explore at your own pace", price: "₹450/day" },
  { icon: "🚌", bg: false, name: "Public transport", sub: "HRTC buses, shared cabs", price: "₹80/day" },
];

const Local = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  return (
    <PlannerShell
      mobileHeaderLeft={<span className="back-link" onClick={() => navigate("/food")}>← Back</span>}
      mobileHeaderRight={<span className="header-action" onClick={() => navigate("/plan")}>Skip all</span>}
      footer={(
        <div className="sticky-bottom">
          <div className="planner-cta-row">
            <button type="button" className="cta-btn" onClick={() => navigate("/loading")}>Build my plan →</button>
          </div>
          <div className="skip-link" style={{ textAlign: "center" }} onClick={() => navigate("/plan")}>Skip this step</div>
        </div>
      )}
    >
      <div className="planner-container--local planner-stack">
        <ProgressBar activeStep={3} />

        <div className="d-page-meta">
          <span className="d-step-label">Step 5 of 5</span>
          <h1 className="planner-page-title">Local travel</h1>
          <p className="planner-page-sub">How will you get around in Manali?</p>
        </div>

        <div className="planner-section-label">Choose your mode</div>
        <div className="planner-local-options">
          {opts.map((o, i) => (
            <div
              key={i}
              className={`planner-opt-with-badge d-opt-card${selected === i ? " d-opt-card--selected" : ""}${i === 0 ? " d-opt-card--rec" : ""}`}
              onClick={() => setSelected(i)}
            >
              {i === 0 && <span className="planner-corner-badge">Recommended</span>}
              <div className={`travel-opt-icon${o.bg ? " blue-bg" : ""}`} style={{ fontSize: 16 }}>{o.icon}</div>
              <div className="travel-opt-info">
                <div className="travel-opt-name">
                  {o.name}
                  {o.chip && <span className="rec-chip">{o.chip}</span>}
                </div>
                <div className="travel-opt-sub">{o.sub}</div>
              </div>
              <div className="d-opt-price-col">
                <div className="travel-opt-price">{o.price}</div>
              </div>
              <div className={`radio-circle${selected === i ? " on" : ""}`} />
            </div>
          ))}
        </div>
      </div>
    </PlannerShell>
  );
};

export default Local;
