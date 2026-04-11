import { useNavigate } from "react-router-dom";
import { Wallet, ChartPie } from "lucide-react";
import PlannerShell from "../components/PlannerShell";
import ProgressBar from "../components/ProgressBar";
import StepLayout from "../components/ui/StepLayout";
import StepHero from "../components/ui/StepHero";
import StatCard from "../components/ui/StatCard";
import { STEP_IMAGES } from "../components/ui/stepImages";

function Plan()
{
    const navigate = useNavigate();

    function handleBackEdit()
    {
        navigate("/travel");
    }

    function handleRegenerate()
    {
        navigate("/mode-select");
    }

    function handleEditSteps()
    {
        navigate("/travel");
    }

    function handleShareClick()
    {
    }

    function renderShareButton()
    {
        return (
            <button
                type="button"
                className="h-10 rounded-lg border border-gray-300 bg-white px-4 text-sm font-medium text-gray-800 shadow-sm transition hover:bg-gray-50"
                onClick={handleShareClick}
            >
                Share ↗
            </button>
        );
    }

    function renderStatTotalValue()
    {
        return (
            <span className="flex items-center gap-2">
                <Wallet className="h-4 w-4 shrink-0 text-gray-400" strokeWidth={1.75} aria-hidden />
                ₹11,250
            </span>
        );
    }

    function renderStatBudgetValue()
    {
        return (
            <span className="flex items-center gap-2">
                <ChartPie className="h-4 w-4 shrink-0 text-gray-400" strokeWidth={1.75} aria-hidden />
                75%
            </span>
        );
    }

    return (
        <PlannerShell
            mobileHeaderLeft={<span className="back-link" onClick={handleBackEdit} role="presentation">← Edit</span>}
            mobileHeaderRight={<span className="header-action">Share</span>}
        >
            <StepLayout className="planner-container--plan">
                <ProgressBar activeStep={4} />

                <StepHero
                    planHero
                    stepLabel="Itinerary"
                    title="Your Manali trip plan"
                    subtitle="Kolkata → Manali · 5 days · AI-generated"
                    imageSrc={STEP_IMAGES.plan}
                    imageAlt="Mountain landscape"
                    trailing={renderShareButton()}
                />

                <div className="d-sum-row planner-plan-sum-grid md:hidden">
                    <div className="d-sum-card">
                        <div className="d-sum-val">
                            ₹11,250
                        </div>
                        <div className="d-sum-label">
                            Total cost
                        </div>
                    </div>
                    <div className="d-sum-card">
                        <div className="d-sum-val">
                            75%
                        </div>
                        <div className="d-sum-label">
                            Budget used
                        </div>
                    </div>
                    <div className="d-sum-card d-sum-card--green">
                        <div className="d-sum-val d-sum-val--savings">
                            ₹3,750
                        </div>
                        <div className="d-sum-label">
                            Savings left
                        </div>
                    </div>
                </div>

                <div className="mb-6 hidden grid-cols-3 gap-4 md:grid">
                    <StatCard
                        label="Total cost"
                        value={renderStatTotalValue()}
                    />
                    <StatCard
                        label="Budget used"
                        value={renderStatBudgetValue()}
                    />
                    <StatCard label="Savings left" value="₹3,750" valueClassName="!text-green-700" />
                </div>

                <div className="d-budget-bar-wrap mt-4 mb-6 md:rounded-lg md:p-3">
                    <div className="d-budget-bar-header">
                        <span className="sav-label">
                            Budget used
                        </span>
                        <span className="sav-val">
                            ₹11,250 / ₹15,000
                        </span>
                    </div>
                    <div className="d-budget-track">
                        <div className="d-budget-fill d-budget-fill--pct-75" />
                    </div>
                    <div className="d-budget-bar-footer">
                        <span className="d-budget-footer-remaining">
                            ₹3,750 remaining
                        </span>
                        <span className="d-budget-footer-meta">
                            75% of ₹15,000
                        </span>
                    </div>
                </div>

                <div className="planner-plan-day flex flex-col gap-6">
                    <div className="d-day-block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                        <div className="day-header !bg-blue-50 !px-4 !py-3">
                            <span className="day-label !text-sm !font-medium !text-blue-700">
                                Day 1 · Departure
                            </span>
                            <span className="day-tag !text-blue-600/90">
                                Kolkata → Delhi → Manali
                            </span>
                        </div>
                        <div className="day-row border-l-2 border-blue-200 pl-4">
                            <div className="day-icon">
                                ✈️
                            </div>
                            <div className="day-content">
                                <div className="day-item-name">
                                    IndiGo 6E-234 · 7:30 AM
                                </div>
                                <div className="day-item-detail">
                                    Kolkata → Delhi · 2h 40m · ₹3,200
                                </div>
                                <button type="button" className="book-btn">
                                    Book on MakeMyTrip ↗
                                </button>
                            </div>
                        </div>
                        <div className="day-row border-l-2 border-blue-200 pl-4">
                            <div className="day-icon">
                                🚌
                            </div>
                            <div className="day-content">
                                <div className="day-item-name">
                                    HRTC Volvo · 6:00 PM
                                </div>
                                <div className="day-item-detail">
                                    Delhi → Manali · Overnight bus · ₹900
                                </div>
                                <button type="button" className="book-btn">
                                    Book on RedBus ↗
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="d-day-block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                        <div className="day-header !bg-blue-50 !px-4 !py-3">
                            <span className="day-label !text-sm !font-medium !text-blue-700">
                                Day 2 · Arrival &amp; rest
                            </span>
                            <span className="day-tag !text-blue-600/90">
                                Manali old town
                            </span>
                        </div>
                        <div className="day-row border-l-2 border-blue-200 pl-4">
                            <div className="day-icon">
                                🏨
                            </div>
                            <div className="day-content">
                                <div className="day-item-name">
                                    Hotel Snowflake (check-in 12 PM)
                                </div>
                                <div className="day-item-detail">
                                    Mall Road · ₹700/night × 4 = ₹2,800
                                </div>
                                <button type="button" className="book-btn">
                                    Book on Goibibo ↗
                                </button>
                            </div>
                        </div>
                        <div className="day-row border-l-2 border-blue-200 pl-4">
                            <div className="day-icon">
                                🍜
                            </div>
                            <div className="day-content">
                                <div className="day-item-name">
                                    Food (Budget)
                                </div>
                                <div className="day-item-detail">
                                    Local dhabas, café row · ~₹400
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-day-block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                        <div className="day-header !bg-blue-50 !px-4 !py-3">
                            <span className="day-label !text-sm !font-medium !text-blue-700">
                                Day 3–4 · Sightseeing
                            </span>
                            <span className="day-tag !text-blue-600/90">
                                Solang · Rohtang · Hadimba
                            </span>
                        </div>
                        <div className="day-row border-l-2 border-blue-200 pl-4">
                            <div className="day-icon">
                                🗺️
                            </div>
                            <div className="day-content">
                                <div className="day-item-name">
                                    Solang Valley + Rohtang Pass
                                </div>
                                <div className="day-item-detail">
                                    Walking + auto · ~₹200/day · Entry ₹500
                                </div>
                            </div>
                        </div>
                        <div className="day-row border-l-2 border-blue-200 pl-4">
                            <div className="day-icon">
                                🏛️
                            </div>
                            <div className="day-content">
                                <div className="day-item-name">
                                    Hadimba Temple + Manu Temple
                                </div>
                                <div className="day-item-detail">
                                    15 min walk from hotel · Free entry
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-plan-actions planner-plan-actions-grid mt-6 grid grid-cols-2 gap-3 md:gap-3">
                    <button type="button" className="h-10 rounded-lg bg-blue-600 px-5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                        Book transport
                    </button>
                    <button type="button" className="h-10 rounded-lg bg-blue-600 px-5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                        Book stay
                    </button>
                    <button
                        type="button"
                        className="h-10 rounded-lg border border-gray-300 bg-white px-5 text-sm font-medium text-gray-800 transition hover:bg-gray-50"
                        onClick={handleRegenerate}
                    >
                        Regenerate
                    </button>
                    <button
                        type="button"
                        className="h-10 rounded-lg border border-gray-300 bg-white px-5 text-sm font-medium text-gray-800 transition hover:bg-gray-50"
                        onClick={handleEditSteps}
                    >
                        Edit steps
                    </button>
                </div>
            </StepLayout>
        </PlannerShell>
    );
}

export default Plan;
