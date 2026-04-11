import { useNavigate } from "react-router-dom";
import PhoneFrame from "../components/PhoneFrame";

function States()
{
    const navigate = useNavigate();

    function handleBackToPlan()
    {
        navigate("/plan");
    }

    function handleAdjustPlan()
    {
        navigate("/travel");
    }

    function handleAdjustInputs()
    {
        navigate("/");
    }

    function handleRetry()
    {
        navigate("/loading");
    }

    function handleIgnore()
    {
    }

    return (
        <PhoneFrame>
            <div className="app-header">
                <span className="back-link" onClick={handleBackToPlan} role="presentation">
                    ← Back to plan
                </span>
                <span className="logo-text">
                    travel
                    <span className="logo-dot">blurry</span>
                </span>
                <span className="planner-header-spacer--wide" />
            </div>

            <div className="content-scroll">
                <div className="screen-title">
                    Edge cases &amp; states
                </div>
                <div className="screen-sub">
                    Over-budget warning, empty state, and error handling
                </div>

                <div className="states-grid">
                    <div>
                        <div className="state-label">
                            Over-budget warning
                        </div>
                        <div className="states-card-shell">
                            <div className="states-ob-header">
                                <span className="states-ob-title">
                                    Day 1 · Departure
                                </span>
                                <span className="states-ob-tag">
                                    Over budget
                                </span>
                            </div>
                            <div className="states-ob-body">
                                <div className="states-ob-alert">
                                    <div className="states-ob-alert-title">
                                        Budget exceeded by ₹2,100
                                    </div>
                                    <div className="states-ob-alert-desc">
                                        Your selected options cost ₹17,100. Switch to a cheaper transport or stay to stay within budget.
                                    </div>
                                </div>
                                <div className="states-ob-actions">
                                    <button type="button" className="states-btn-primary" onClick={handleAdjustPlan}>
                                        Adjust plan
                                    </button>
                                    <button type="button" className="states-btn-secondary" onClick={handleIgnore}>
                                        Ignore
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="state-label">
                            Empty / no results
                        </div>
                        <div className="states-card-shell">
                            <div className="empty-state">
                                <div className="empty-icon">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <circle cx="11" cy="11" r="8" stroke="#185FA5" strokeWidth="1.5" />
                                        <path d="M11 7v5" stroke="#185FA5" strokeWidth="1.5" strokeLinecap="round" />
                                        <circle cx="11" cy="15" r="0.8" fill="#185FA5" />
                                    </svg>
                                </div>
                                <div className="empty-title">
                                    No trips found
                                </div>
                                <div className="empty-desc">
                                    We couldn&apos;t build a plan within ₹5,000 for 7 days. Try increasing your budget or reducing trip length.
                                </div>
                                <button type="button" className="cta-btn states-empty-cta" onClick={handleAdjustInputs}>
                                    Adjust inputs
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="state-label">
                            Network / API error
                        </div>
                        <div className="states-card-shell">
                            <div className="empty-state">
                                <div className="empty-icon states-error-icon">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M11 3L20 19H2L11 3Z" stroke="#A32D2D" strokeWidth="1.5" strokeLinejoin="round" />
                                        <path d="M11 10v4" stroke="#A32D2D" strokeWidth="1.5" strokeLinecap="round" />
                                        <circle cx="11" cy="16" r="0.8" fill="#A32D2D" />
                                    </svg>
                                </div>
                                <div className="empty-title">
                                    Something went wrong
                                </div>
                                <div className="empty-desc">
                                    We had trouble building your plan. Your inputs are saved — tap retry to try again.
                                </div>
                                <button type="button" className="cta-btn states-retry-btn" onClick={handleRetry}>
                                    Retry
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PhoneFrame>
    );
}

export default States;
