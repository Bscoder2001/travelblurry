import { useNavigate } from "react-router-dom";
import PhoneFrame from "../components/PhoneFrame";

const States = () => {
  const navigate = useNavigate();
  return (
    <PhoneFrame time="9:55">
      <div className="app-header">
        <span className="back-link" onClick={() => navigate("/plan")}>← Back to plan</span>
        <span className="logo-text">travel<span className="logo-dot">blurry</span></span>
        <span style={{ width: 60 }}></span>
      </div>

      <div className="content-scroll">
        <div className="screen-title">Edge cases & states</div>
        <div className="screen-sub">Over-budget warning, empty state, and error handling</div>

        <div className="states-grid">
          {/* Over-budget */}
          <div>
            <div className="state-label">Over-budget warning</div>
            <div style={{ background: "var(--card-bg)", border: "0.5px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
              <div style={{ background: "#A32D2D", padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>Day 1 · Departure</span>
                <span style={{ fontSize: 10, color: "#F7C1C1" }}>Over budget</span>
              </div>
              <div style={{ padding: "12px 14px" }}>
                <div style={{ background: "#FCEBEB", border: "0.5px solid #F7C1C1", borderRadius: 8, padding: "10px 12px", marginBottom: 10 }}>
                  <div style={{ fontSize: 12, fontWeight: 500, color: "#A32D2D", marginBottom: 3 }}>Budget exceeded by ₹2,100</div>
                  <div style={{ fontSize: 11, color: "#E24B4A" }}>Your selected options cost ₹17,100. Switch to a cheaper transport or stay to stay within budget.</div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button style={{ flex: 1, padding: "9px 6px", borderRadius: 8, border: "none", background: "#A32D2D", color: "#fff", fontSize: 12, cursor: "pointer" }} onClick={() => navigate("/travel")}>Adjust plan</button>
                  <button style={{ flex: 1, padding: "9px 6px", borderRadius: 8, border: "0.5px solid var(--border)", background: "transparent", color: "var(--text-secondary)", fontSize: 12, cursor: "pointer" }}>Ignore</button>
                </div>
              </div>
            </div>
          </div>

          {/* Empty state */}
          <div>
            <div className="state-label">Empty / no results</div>
            <div style={{ background: "var(--card-bg)", border: "0.5px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
              <div className="empty-state">
                <div className="empty-icon">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="8" stroke="#185FA5" strokeWidth="1.5"/>
                    <path d="M11 7v5" stroke="#185FA5" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="11" cy="15" r="0.8" fill="#185FA5"/>
                  </svg>
                </div>
                <div className="empty-title">No trips found</div>
                <div className="empty-desc">We couldn't build a plan within ₹5,000 for 7 days. Try increasing your budget or reducing trip length.</div>
                <button className="cta-btn" style={{ marginTop: 14, width: 160, fontSize: 12, padding: 10 }} onClick={() => navigate("/")}>Adjust inputs</button>
              </div>
            </div>
          </div>

          {/* Error state */}
          <div>
            <div className="state-label">Network / API error</div>
            <div style={{ background: "var(--card-bg)", border: "0.5px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
              <div className="empty-state">
                <div className="empty-icon" style={{ background: "#FCEBEB" }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 3L20 19H2L11 3Z" stroke="#A32D2D" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M11 10v4" stroke="#A32D2D" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="11" cy="16" r="0.8" fill="#A32D2D"/>
                  </svg>
                </div>
                <div className="empty-title">Something went wrong</div>
                <div className="empty-desc">We had trouble building your plan. Your inputs are saved — tap retry to try again.</div>
                <button className="cta-btn" style={{ marginTop: 14, width: 120, fontSize: 12, padding: 10, background: "#A32D2D" }} onClick={() => navigate("/loading")}>Retry</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default States;
