import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Car, Bike, Bus } from "lucide-react";
import PlannerShell from "../components/PlannerShell";
import ProgressBar from "../components/ProgressBar";
import StepLayout from "../components/ui/StepLayout";
import StepHero from "../components/ui/StepHero";
import OptionCard from "../components/ui/OptionCard";
import { STEP_IMAGES } from "../components/ui/stepImages";

const OPTIONS = [
    { icon: "🚶", bg: true, name: "Walking + auto", chip: "Recommended", sub: "Best for most Manali sightseeing spots", price: "₹200/day", CardIcon: MapPin },
    { icon: "🚕", bg: false, name: "Cab (Ola / Uber)", sub: "Comfortable, on-demand", price: "₹600/day", CardIcon: Car },
    { icon: "🛵", bg: false, name: "Bike rental", sub: "Explore at your own pace", price: "₹450/day", CardIcon: Bike },
    { icon: "🚌", bg: false, name: "Public transport", sub: "HRTC buses, shared cabs", price: "₹80/day", CardIcon: Bus },
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
    let cls = "travel-opt-icon travel-opt-icon--local";
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

function Local()
{
    const [selected, setSelected] = useState(0);
    const navigate = useNavigate();

    function handleBack()
    {
        navigate("/food");
    }

    function handleSkipAll()
    {
        navigate("/plan");
    }

    function handleConfirm()
    {
        navigate("/loading");
    }

    function handleSkipStep()
    {
        navigate("/plan");
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
                <div
                    key={index}
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
                    </div>
                    <div className={buildRadioClass(selected, index)} />
                </div>
            );
        });
    }

    function renderDesktopRecommended()
    {
        const first = OPTIONS[0];

        function handleClick()
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
                    recommended
                    selected={selected === 0}
                    onClick={handleClick}
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
                    key={o.name}
                    variant="grid"
                    Icon={o.CardIcon}
                    title={o.name}
                    description={o.sub}
                    pricePrimary={o.price}
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
                        onClick={handleConfirm}
                    >
                        Build my plan →
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
            <StepLayout className="planner-container--local">
                <ProgressBar activeStep={3} />

                <StepHero
                    stepLabel="Step 5 of 5"
                    title="Local travel"
                    subtitle="How will you get around in Manali?"
                    imageSrc={STEP_IMAGES.local}
                    imageAlt="Map and travel"
                />

                <div className="planner-local-options md:hidden">
                    <div className="planner-section-label">
                        Choose your mode
                    </div>
                    {renderMobileRows()}
                </div>

                <div className="hidden flex-col gap-6 md:flex">
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
            </StepLayout>
        </PlannerShell>
    );
}

export default Local;
