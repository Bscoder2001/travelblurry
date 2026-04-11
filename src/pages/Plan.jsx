import { useNavigate } from "react-router-dom";
import PlannerShell from "../components/PlannerShell";
import ProgressBar from "../components/ProgressBar";

const Plan = () => {
  const navigate = useNavigate();
  return (
    <PlannerShell
      mobileHeaderLeft={<span className="back-link" onClick={() => navigate("/travel")}>← Edit</span>}
      mobileHeaderRight={<span className="header-action">Share</span>}
    >
      <div className="planner-container--plan planner-stack">
        <ProgressBar activeStep={4} />

        <div className="d-plan-title-row">
          <div>
            <h1 className="planner-page-title">Your Manali trip plan</h1>
            <p className="planner-page-sub" style={{ marginTop: 4 }}>
              Kolkata → Manali · 5 days · AI-generated
            </p>
          </div>
          <button type="button" className="d-share-btn">Share ↗</button>
        </div>

        <div className="d-sum-row planner-plan-sum-grid">
          <div className="d-sum-card">
            <div className="d-sum-val">₹11,250</div>
            <div className="d-sum-label">Total cost</div>
          </div>
          <div className="d-sum-card">
            <div className="d-sum-val">75%</div>
            <div className="d-sum-label">Budget used</div>
          </div>
          <div className="d-sum-card d-sum-card--green">
            <div className="d-sum-val" style={{ color: "var(--green)" }}>₹3,750</div>
            <div className="d-sum-label">Savings left</div>
          </div>
        </div>

        <div className="d-budget-bar-wrap">
          <div className="d-budget-bar-header">
            <span className="sav-label">Budget used</span>
            <span className="sav-val">₹11,250 / ₹15,000</span>
          </div>
          <div className="d-budget-track">
            <div className="d-budget-fill" style={{ width: "75%" }} />
          </div>
          <div className="d-budget-bar-footer">
            <span style={{ fontSize: 11, color: "var(--green)" }}>₹3,750 remaining</span>
            <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>75% of ₹15,000</span>
          </div>
        </div>

        <div className="planner-plan-day">
          <div className="d-day-block">
            <div className="day-header">
              <span className="day-label">Day 1 · Departure</span>
              <span className="day-tag">Kolkata → Delhi → Manali</span>
            </div>
            <div className="day-row">
              <div className="day-icon">✈️</div>
              <div className="day-content">
                <div className="day-item-name">IndiGo 6E-234 · 7:30 AM</div>
                <div className="day-item-detail">Kolkata → Delhi · 2h 40m · ₹3,200</div>
                <button type="button" className="book-btn">Book on MakeMyTrip ↗</button>
              </div>
            </div>
            <div className="day-row">
              <div className="day-icon">🚌</div>
              <div className="day-content">
                <div className="day-item-name">HRTC Volvo · 6:00 PM</div>
                <div className="day-item-detail">Delhi → Manali · Overnight bus · ₹900</div>
                <button type="button" className="book-btn">Book on RedBus ↗</button>
              </div>
            </div>
          </div>

          <div className="d-day-block">
            <div className="day-header">
              <span className="day-label">Day 2 · Arrival &amp; rest</span>
              <span className="day-tag">Manali old town</span>
            </div>
            <div className="day-row">
              <div className="day-icon">🏨</div>
              <div className="day-content">
                <div className="day-item-name">Hotel Snowflake (check-in 12 PM)</div>
                <div className="day-item-detail">Mall Road · ₹700/night × 4 = ₹2,800</div>
                <button type="button" className="book-btn">Book on Goibibo ↗</button>
              </div>
            </div>
            <div className="day-row">
              <div className="day-icon">🍜</div>
              <div className="day-content">
                <div className="day-item-name">Food (Budget)</div>
                <div className="day-item-detail">Local dhabas, café row · ~₹400</div>
              </div>
            </div>
          </div>

          <div className="d-day-block">
            <div className="day-header">
              <span className="day-label">Day 3–4 · Sightseeing</span>
              <span className="day-tag">Solang · Rohtang · Hadimba</span>
            </div>
            <div className="day-row">
              <div className="day-icon">🗺️</div>
              <div className="day-content">
                <div className="day-item-name">Solang Valley + Rohtang Pass</div>
                <div className="day-item-detail">Walking + auto · ~₹200/day · Entry ₹500</div>
              </div>
            </div>
            <div className="day-row">
              <div className="day-icon">🏛️</div>
              <div className="day-content">
                <div className="day-item-name">Hadimba Temple + Manu Temple</div>
                <div className="day-item-detail">15 min walk from hotel · Free entry</div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-plan-actions planner-plan-actions-grid">
          <button type="button" className="planner-plan-act planner-plan-act--primary">Book transport</button>
          <button type="button" className="planner-plan-act planner-plan-act--primary">Book stay</button>
          <button type="button" className="planner-plan-act planner-plan-act--secondary" onClick={() => navigate("/mode-select")}>Regenerate</button>
          <button type="button" className="planner-plan-act planner-plan-act--secondary" onClick={() => navigate("/travel")}>Edit steps</button>
        </div>
      </div>
    </PlannerShell>
  );
};

export default Plan;
