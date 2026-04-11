import { useNavigate } from "react-router-dom";
import PlannerShell from "../components/PlannerShell";
import ProgressBar from "../components/ProgressBar";

const BULLETS_QUICK = ["Fastest option", "Auto optimized", "Editable later"];
const BULLETS_CUSTOM = ["Full control", "Flexible choices", "Change anytime"];

function ModeSelect()
{
    const navigate = useNavigate();

    function handleBack()
    {
        navigate("/");
    }

    function handleQuickPlan()
    {
        navigate("/loading");
    }

    function handleCustomize()
    {
        navigate("/travel");
    }

    function renderQuickBullets()
    {
        return BULLETS_QUICK.map(function mapBullet(text)
        {
            return (
                <li key={text} className="ms-bullet">
                    <span className="ms-check">
                        ✓
                    </span>
                    {text}
                </li>
            );
        });
    }

    function renderCustomBullets()
    {
        return BULLETS_CUSTOM.map(function mapBullet(text)
        {
            return (
                <li key={text} className="ms-bullet">
                    <span className="ms-check">
                        ✓
                    </span>
                    {text}
                </li>
            );
        });
    }

    return (
        <PlannerShell
            mobileHeaderLeft={<span className="back-link" onClick={handleBack} role="presentation">← Back</span>}
            mobileHeaderRight={<span className="planner-header-spacer" />}
        >
            <div className="ms-shell planner-container--mode planner-stack">
                <ProgressBar activeStep={0} preTravel />

                <div className="ms-head planner-head-block">
                    <span className="planner-eyebrow">
                        Step 1 of 5
                    </span>
                    <h1 className="planner-page-title">
                        Choose how you&apos;d like to plan your trip
                    </h1>
                    <p className="planner-page-sub">
                        Kolkata → Manali • 5 days • ₹15,000
                    </p>
                </div>

                <div className="ms-grid planner-ms-grid">
                    <div className="ms-card ms-card--rec" onClick={handleQuickPlan} role="presentation">
                        <div className="ms-card-top">
                            <div className="ms-card-icon">
                                <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
                                    <path d="M10 2L12.2 7.8H18L13.4 11.4L15.2 17L10 13.6L4.8 17L6.6 11.4L2 7.8H7.8L10 2Z" fill="#185FA5" />
                                </svg>
                            </div>
                            <span className="ms-rec-badge">
                                Recommended
                            </span>
                        </div>
                        <h2 className="ms-card-title">
                            Quick Plan
                        </h2>
                        <p className="ms-card-desc">
                            We&apos;ll automatically build the best trip within your budget.
                        </p>
                        <ul className="ms-bullets">
                            {renderQuickBullets()}
                        </ul>
                        <div className="ms-card-footer">
                            <button type="button" className="ms-cta ms-cta--primary">
                                Continue →
                            </button>
                        </div>
                    </div>

                    <div className="ms-card" onClick={handleCustomize} role="presentation">
                        <div className="ms-card-top">
                            <div className="ms-card-icon ms-card-icon--plain">
                                <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
                                    <rect x="2" y="4" width="16" height="3" rx="1.5" fill="#185FA5" />
                                    <rect x="2" y="9" width="11" height="3" rx="1.5" fill="#B5D4F4" />
                                    <rect x="2" y="14" width="13" height="3" rx="1.5" fill="#B5D4F4" />
                                </svg>
                            </div>
                        </div>
                        <h2 className="ms-card-title">
                            Customize Step-by-Step
                        </h2>
                        <p className="ms-card-desc">
                            Choose transport, stay, food and local travel manually.
                        </p>
                        <ul className="ms-bullets">
                            {renderCustomBullets()}
                        </ul>
                        <div className="ms-card-footer">
                            <button type="button" className="ms-cta ms-cta--secondary">
                                Customize →
                            </button>
                        </div>
                    </div>
                </div>

                <p className="ms-footnote">
                    You can switch between modes anytime
                </p>
            </div>
        </PlannerShell>
    );
}

export default ModeSelect;
