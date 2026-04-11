import { useNavigate } from "react-router-dom";
import PhoneFrame from "./PhoneFrame";

/**
 * Shared chrome for planner flow: mobile keeps compact header; desktop uses homepage header.
 */
const PlannerShell = ({
  mobileHeaderLeft,
  mobileHeaderRight,
  children,
  footer,
  innerClassName = "",
}) => {
  const navigate = useNavigate();

  return (
    <PhoneFrame planner>
      <div className="planner-mobile-header app-header">
        {mobileHeaderLeft ?? <span style={{ width: 40 }} />}
        <span className="logo-text">travel<span className="logo-dot">blurry</span></span>
        {mobileHeaderRight ?? <span style={{ width: 40 }} />}
      </div>

      <header className="h-header planner-desktop-header">
        <span className="logo-text">travel<span className="logo-dot">blurry</span></span>

        <nav className="h-nav" aria-label="Main">
          <a href="/plan-year" className="h-nav-link">Plan My Year</a>
          <a href="/mode-select" className="h-nav-link">How it works</a>
          <button type="button" className="h-nav-cta" onClick={() => navigate("/mode-select")}>Plan Trip</button>
        </nav>
      </header>

      <div className={`content-scroll planner-content-scroll${innerClassName ? ` ${innerClassName}` : ""}`}>
        {children}
      </div>

      {footer}
    </PhoneFrame>
  );
};

export default PlannerShell;
