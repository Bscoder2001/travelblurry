import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plane, TrainFront, Bus } from "lucide-react";
import PlannerShell from "../components/PlannerShell";
import ProgressBar from "../components/ProgressBar";
import StepLayout from "../components/ui/StepLayout";
import StepHero from "../components/ui/StepHero";
import OptionCard from "../components/ui/OptionCard";
import { STEP_IMAGES } from "../components/ui/stepImages";

const OPTIONS = [
    { icon: "✈️", bg: true, name: "Flight", chip: "Best value", sub: "IndiGo · 6E-234 · 2h 40m", price: "₹3,200", dur: "Non-stop", CardIcon: Plane },
    { icon: "✈️", bg: false, name: "Flight", sub: "Air India · AI-891 · 3h 10m", price: "₹4,100", dur: "1 stop", CardIcon: Plane },
    { icon: "🚂", bg: false, name: "Train", sub: "Himachal Exp · 2 days", price: "₹1,400", dur: "Sleeper AC", CardIcon: TrainFront },
    { icon: "🚌", bg: false, name: "Bus", sub: "HRTC Volvo · 36h", price: "₹900", dur: "Overnight", CardIcon: Bus },
];

const SECTION_LABEL = "text-xs font-semibold uppercase tracking-wide text-gray-400";

function buildMobileOptionClass(selectedIndex, optionIndex)
{
    let cls = "planner-opt-with-badge d-opt-card";
    if (selectedIndex === optionIndex)
    {
        cls += " d-opt-card--selected";
    }
    if (optionIndex === 0)
    {
        cls += " d-opt-card--rec";
    }
    return cls;
}

function buildTravelIconClass(bg)
{
    let cls = "travel-opt-icon";
    if (bg)
    {
        cls += " blue-bg";
    }
    return cls;
}

function buildRadioClass(selectedIndex, optionIndex)
{
    let cls = "radio-circle";
    if (selectedIndex === optionIndex)
    {
        cls += " on";
    }
    return cls;
}

function Travel()
{
    const [selected, setSelected] = useState(0);
    const navigate = useNavigate();

    function handleBack()
    {
        navigate("/mode-select");
    }

    function handleSkipAll()
    {
        navigate("/plan");
    }

    function handleConfirmTransport()
    {
        navigate("/stay");
    }

    function handleSkipStep()
    {
        navigate("/stay");
    }

    function handleSelectOption(index)
    {
        setSelected(index);
    }

    function renderChip(chip)
    {
        if (!chip)
        {
            return null;
        }

        return (
            <span className="rec-chip">
                {chip}
            </span>
        );
    }

    function renderOtherOptionsLabel(index)
    {
        if (index !== 1)
        {
            return null;
        }

        return (
            <div className="planner-section-label mt-4">
                Other options
            </div>
        );
    }

    function renderRecommendedCorner(index)
    {
        if (index !== 0)
        {
            return null;
        }

        return (
            <span className="planner-corner-badge">
                Recommended
            </span>
        );
    }

    function renderMobileRows()
    {
        return OPTIONS.map(function mapOption(o, index)
        {
            function handleRowClick()
            {
                handleSelectOption(index);
            }

            return (
                <div key={index}>
                    {renderOtherOptionsLabel(index)}
                    <div
                        className={buildMobileOptionClass(selected, index)}
                        onClick={handleRowClick}
                        role="presentation"
                    >
                        {renderRecommendedCorner(index)}
                        <div className={buildTravelIconClass(o.bg)}>
                            {o.icon}
                        </div>
                        <div className="travel-opt-info">
                            <div className="travel-opt-name">
                                {o.name}
                                {renderChip(o.chip)}
                            </div>
                            <div className="travel-opt-sub">
                                {o.sub}
                            </div>
                        </div>
                        <div className="d-opt-price-col">
                            <div className="travel-opt-price">
                                {o.price}
                            </div>
                            <div className="travel-opt-dur">
                                {o.dur}
                            </div>
                        </div>
                        <div className={buildRadioClass(selected, index)} />
                    </div>
                </div>
            );
        });
    }

    function renderDesktopRecommended()
    {
        const first = OPTIONS[0];

        function handleRecommendedClick()
        {
            handleSelectOption(0);
        }

        return (
            <div>
                <p className={`${SECTION_LABEL} mb-3`}>
                    Recommended
                </p>
                <OptionCard
                    Icon={first.CardIcon}
                    title={first.name}
                    chip={first.chip}
                    description={first.sub}
                    pricePrimary={first.price}
                    priceSecondary={first.dur}
                    recommended
                    selected={selected === 0}
                    onClick={handleRecommendedClick}
                />
            </div>
        );
    }

    function renderDesktopOtherGrid()
    {
        const rest = OPTIONS.slice(1);

        return rest.map(function mapRest(o, index)
        {
            const optionIndex = index + 1;

            function handleGridClick()
            {
                handleSelectOption(optionIndex);
            }

            return (
                <OptionCard
                    key={`travel-opt-${optionIndex}`}
                    variant="grid"
                    Icon={o.CardIcon}
                    title={o.name}
                    description={o.sub}
                    pricePrimary={o.price}
                    priceSecondary={o.dur}
                    selected={selected === optionIndex}
                    onClick={handleGridClick}
                />
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
                        onClick={handleConfirmTransport}
                    >
                        Confirm transport →
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
            <StepLayout className="planner-container--travel">
                <ProgressBar activeStep={0} />

                <StepHero
                    stepLabel="Step 2 of 5"
                    title="How will you travel?"
                    subtitle="Kolkata → Manali · Outbound journey"
                    imageSrc={STEP_IMAGES.travel}
                    imageAlt="Tropical beach and ocean"
                />

                <div className="planner-travel-options md:hidden">
                    <div className="planner-section-label">
                        Recommended for you
                    </div>
                    {renderMobileRows()}
                </div>

                <div className="mt-6 hidden flex-col gap-6 md:flex">
                    {renderDesktopRecommended()}
                    <div>
                        <p className={`${SECTION_LABEL} mb-3`}>
                            Other options
                        </p>
                        <div className="grid grid-cols-3 gap-3">
                            {renderDesktopOtherGrid()}
                        </div>
                    </div>
                </div>

                <p className="helper-text mt-6">
                    You can change this later from the final plan
                </p>
            </StepLayout>
        </PlannerShell>
    );
}

export default Travel;
