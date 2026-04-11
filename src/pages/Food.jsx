import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Utensils } from "lucide-react";
import PlannerShell from "../components/PlannerShell";
import ProgressBar from "../components/ProgressBar";
import StepLayout from "../components/ui/StepLayout";
import StepHero from "../components/ui/StepHero";
import { STEP_IMAGES } from "../components/ui/stepImages";

const TIERS = [
    { label: "Budget", budget: "₹350–500", meals: "Dhabas, local eateries", total: "~₹2,000 total", barClass: "d-food-bar-fill--tier-0", perDay: "₹350/day" },
    { label: "Comfort", budget: "₹600–800", meals: "Cafés, mid-range restaurants", total: "~₹3,500 total", barClass: "d-food-bar-fill--tier-1", perDay: "₹700/day" },
    { label: "Premium", budget: "₹1,000–1,500", meals: "Restaurants, fine dining", total: "~₹6,000 total", barClass: "d-food-bar-fill--tier-2", perDay: "₹1,200/day" },
];

function buildMobilePillClass(activeIndex, index)
{
    let cls = "d-food-pill";
    if (activeIndex === index)
    {
        cls += " d-food-pill--active";
    }
    return cls;
}

function buildDesktopTierButtonClass(activeIndex, index)
{
    let cls = "flex flex-1 flex-col items-center justify-center rounded-full border border-transparent px-3 text-center transition-all";
    if (activeIndex === index)
    {
        cls += " bg-blue-600 text-white shadow-sm";
    }
    else
    {
        cls += " bg-gray-100 text-gray-700 hover:bg-gray-200";
    }
    return cls;
}

function buildDesktopTierSubClass(activeIndex, index)
{
    let cls = "text-[11px] font-normal";
    if (activeIndex === index)
    {
        cls += " text-blue-100";
    }
    else
    {
        cls += " text-gray-500";
    }
    return cls;
}

function Food()
{
    const [active, setActive] = useState(0);
    const navigate = useNavigate();
    const currentTier = TIERS[active];

    function handleBack()
    {
        navigate("/stay");
    }

    function handleSkipAll()
    {
        navigate("/plan");
    }

    function handleConfirm()
    {
        navigate("/local");
    }

    function handleSkipStep()
    {
        navigate("/local");
    }

    function handleSetActive(index)
    {
        setActive(index);
    }

    function renderMobilePills()
    {
        return TIERS.map(function mapTier(tier, index)
        {
            function handlePillClick()
            {
                handleSetActive(index);
            }

            return (
                <button
                    key={tier.label}
                    type="button"
                    className={buildMobilePillClass(active, index)}
                    onClick={handlePillClick}
                >
                    <span className="d-food-pill-label">
                        {tier.label}
                    </span>
                    <span className="d-food-pill-sub">
                        {tier.perDay}
                    </span>
                </button>
            );
        });
    }

    function renderDesktopTierButtons()
    {
        return TIERS.map(function mapTier(tier, index)
        {
            function handleClick()
            {
                handleSetActive(index);
            }

            return (
                <button
                    key={tier.label}
                    type="button"
                    onClick={handleClick}
                    className={buildDesktopTierButtonClass(active, index)}
                >
                    <span className="flex items-center gap-1.5 text-sm font-medium">
                        <Utensils className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
                        {tier.label}
                    </span>
                    <span className={buildDesktopTierSubClass(active, index)}>
                        {tier.perDay}
                    </span>
                </button>
            );
        });
    }

    function renderFooter()
    {
        return (
            <div className="sticky-bottom">
                <div className="mt-6 flex justify-center px-4">
                    <button
                        type="button"
                        className="h-10 w-64 rounded-lg bg-blue-600 px-5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                        onClick={handleConfirm}
                    >
                        Confirm food preference →
                    </button>
                </div>
                <div className="skip-link mt-2 text-center" onClick={handleSkipStep} role="presentation">
                    Skip this step
                </div>
            </div>
        );
    }

    return (
        <PlannerShell
            mobileHeaderLeft={<span className="back-link" onClick={handleBack} role="presentation">← Back</span>}
            mobileHeaderRight={<span className="header-action" onClick={handleSkipAll} role="presentation">Skip all</span>}
            footer={renderFooter()}
        >
            <StepLayout className="planner-container--food planner-food-pills planner-food-summary">
                <ProgressBar activeStep={2} />

                <StepHero
                    stepLabel="Step 4 of 5"
                    title="Food preference"
                    subtitle="Sets your daily food budget. You choose where to eat."
                    imageSrc={STEP_IMAGES.food}
                    imageAlt="Food ingredients"
                />

                <div className="md:hidden">
                    <div className="d-food-pills">
                        {renderMobilePills()}
                    </div>

                    <div className="d-food-card">
                        <div className="d-food-card-row">
                            <span className="seg-detail-label">
                                Daily food budget
                            </span>
                            <span className="seg-detail-val">
                                {currentTier.budget}
                            </span>
                        </div>
                        <div className="d-food-card-row">
                            <span className="seg-detail-label">
                                Typical meals
                            </span>
                            <span className="seg-detail-val">
                                {currentTier.meals}
                            </span>
                        </div>
                        <div className="d-food-card-row">
                            <span className="seg-detail-label">
                                For 5 days
                            </span>
                            <span className="seg-detail-val seg-detail-val--accent">
                                {currentTier.total}
                            </span>
                        </div>
                        <div className="d-food-bar-track">
                            <div className={`d-food-bar-fill ${currentTier.barClass}`} />
                        </div>
                    </div>

                    <div className="d-food-notice">
                        Budget mode recommended — keeps ₹10,800 for transport, stay, and local travel.
                    </div>
                </div>

                <div className="hidden flex-col gap-6 md:flex">
                    <div className="flex h-10 gap-2">
                        {renderDesktopTierButtons()}
                    </div>

                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                        <div className="flex justify-between border-b border-gray-100 py-2 text-sm first:pt-0">
                            <span className="text-gray-500">
                                Daily food budget
                            </span>
                            <span className="font-medium text-gray-900">
                                {currentTier.budget}
                            </span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 py-2">
                            <span className="text-gray-500">
                                Typical meals
                            </span>
                            <span className="font-medium text-gray-900">
                                {currentTier.meals}
                            </span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-gray-500">
                                For 5 days
                            </span>
                            <span className="font-semibold text-blue-600">
                                {currentTier.total}
                            </span>
                        </div>
                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                            <div className={`h-full rounded-full bg-blue-600 transition-all ${currentTier.barClass}`} />
                        </div>
                    </div>

                    <div className="rounded-lg border border-amber-200/80 bg-amber-50 px-4 py-3 text-xs font-normal text-amber-950">
                        Budget mode recommended — keeps ₹10,800 for transport, stay, and local travel.
                    </div>
                </div>
            </StepLayout>
        </PlannerShell>
    );
}

export default Food;
