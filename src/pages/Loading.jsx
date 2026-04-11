import { useNavigate } from "react-router-dom";
import PhoneFrame from "../components/PhoneFrame";

const steps = [
  { label: "Checking transport options", done: true },
  { label: "Finding best stays...", done: false, active: true },
  { label: "Calculating day-by-day budget", done: false },
];

const Loading = () => {
  const navigate = useNavigate();
  return (
    <PhoneFrame time="9:42">
      <div className="app-header">
        <span className="logo-text">travel<span className="logo-dot">blurry</span></span>
      </div>

      <div className="content-scroll">
        <div className="d-wrap d-wrap--sm">
          <div className="d-loading-center">

            <div className="loading-spinner" />

            <h2 className="d-loading-title">Building your trip plan</h2>
            <p className="d-loading-sub">Searching best options within ₹15,000 for 5 days to Manali</p>

            <div className="loading-dots" style={{ marginBottom: 28 }}>
              <div className="loading-dot" />
              <div className="loading-dot" />
              <div className="loading-dot" />
            </div>

            <div className="d-load-prog-track">
              <div className="d-load-prog-fill" style={{ width: "45%" }} />
            </div>
            <p className="d-load-prog-label">45% complete</p>

            <div className="d-load-steps">
              {steps.map((s, i) => (
                <div key={i} className={`d-load-step${s.done ? " d-load-step--done" : ""}${s.active ? " d-load-step--active" : ""}`}>
                  <span className="d-load-step-dot" />
                  <span className="d-load-step-text">{s.label}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="secondary-btn"
              style={{ maxWidth: 240, marginTop: 8 }}
              onClick={() => navigate("/plan")}
            >
              Skip — show plan now
            </button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default Loading;
