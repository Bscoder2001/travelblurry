import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Hotel } from "lucide-react";
import PlannerShell from "../components/PlannerShell";
import ProgressBar from "../components/ProgressBar";
import Stars from "../components/Stars";
import StepLayout from "../components/ui/StepLayout";
import StepHero from "../components/ui/StepHero";
import { STEP_IMAGES } from "../components/ui/stepImages";

const STAY_CARDS = [
    { icon: "🛏️", name: "Hostel", price: "₹350/night", stars: 2 },
    { icon: "🏨", name: "3-star hotel", price: "₹1,800/night", stars: 3 },
    { icon: "🏠", name: "Guesthouse", price: "₹500/night", stars: 3 },
    { icon: "🏕️", name: "Camp stay", price: "₹600/night", stars: 4 },
];

const SECTION_LABEL = "text-xs font-semibold uppercase tracking-wide text-gray-400";

function buildStayRecClass(selected)
{
    let cls = "d-stay-rec";
    if (selected === "rec")
    {
        cls += " d-stay-rec--selected";
    }
    return cls;
}

function buildStayRecRadioClass(selected)
{
    let cls = "radio-circle";
    if (selected === "rec")
    {
        cls += " on";
    }
    return cls;
}

function buildStayCardClass(selected, cardName)
{
    let cls = "d-stay-card";
    if (selected === cardName)
    {
        cls += " d-stay-card--selected";
    }
    return cls;
}

function buildDesktopRecButtonClass(selected)
{
    let cls = `
relative flex w-full items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 text-left shadow-sm transition-all duration-200
hover:-translate-y-0.5 hover:shadow-md
`.replace(/\s+/g, " ").trim();

    if (selected === "rec")
    {
        cls += " border-blue-200 bg-blue-50 shadow-sm";
    }

    return cls;
}

function buildDesktopOtherButtonClass(selected, cardName)
{
    let cls = `
flex flex-col items-start rounded-xl border border-gray-200 bg-white p-3 text-left shadow-sm transition-all duration-200
hover:-translate-y-0.5 hover:shadow-md
`.replace(/\s+/g, " ").trim();

    if (selected === cardName)
    {
        cls += " border-blue-200 bg-blue-50 shadow-sm";
    }

    return cls;
}

function Stay()
{
    const [selected, setSelected] = useState("rec");
    const navigate = useNavigate();

    function handleBack()
    {
        navigate("/travel");
    }

    function handleSkipAll()
    {
        navigate("/plan");
    }

    function handleConfirmStay()
    {
        navigate("/food");
    }

    function handleSkipStep()
    {
        navigate("/food");
    }

    function handleSelectRec()
    {
        setSelected("rec");
    }

    function handleSelectCard(cardName)
    {
        setSelected(cardName);
    }

    function renderMobileStayCards()
    {
        return STAY_CARDS.map(function mapCard(c)
        {
            function handleCardClick()
            {
                handleSelectCard(c.name);
            }

            return (
                <div
                    key={c.name}
                    className={buildStayCardClass(selected, c.name)}
                    onClick={handleCardClick}
                    role="presentation"
                >
                    <div className="stay-card-icon">
                        {c.icon}
                    </div>
                    <div className="stay-card-name">
                        {c.name}
                    </div>
                    <div className="stay-card-price">
                        {c.price}
                    </div>
                    <Stars filled={c.stars} />
                </div>
            );
        });
    }

    function renderDesktopOtherGrid()
    {
        return STAY_CARDS.map(function mapCard(c)
        {
            function handleClick()
            {
                handleSelectCard(c.name);
            }

            return (
                <button
                    key={c.name}
                    type="button"
                    onClick={handleClick}
                    className={buildDesktopOtherButtonClass(selected, c.name)}
                >
                    <span className="text-lg">
                        {c.icon}
                    </span>
                    <span className="mt-1 text-sm font-medium text-gray-900">
                        {c.name}
                    </span>
                    <span className="text-xs text-gray-500">
                        {c.price}
                    </span>
                    <Stars filled={c.stars} />
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
                        onClick={handleConfirmStay}
                    >
                        Confirm stay →
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
            <StepLayout className="planner-container--stay planner-stay-grid-wrap">
                <ProgressBar activeStep={1} />

                <StepHero
                    stepLabel="Step 3 of 5"
                    title="Where will you stay?"
                    subtitle="Manali · 4 nights"
                    imageSrc={STEP_IMAGES.stay}
                    imageAlt="Hotel room"
                />

                <div className="md:hidden">
                    <div className="planner-section-label">
                        Recommended
                    </div>
                    <div
                        className={buildStayRecClass(selected)}
                        onClick={handleSelectRec}
                        role="presentation"
                    >
                        <div className="d-stay-rec-body">
                            <div className="d-stay-rec-info">
                                <div className="d-stay-rec-name">
                                    Budget hotel (central)
                                </div>
                                <div className="d-stay-rec-sub">
                                    Mall Road area · AC · WiFi
                                </div>
                                <Stars filled={3} />
                            </div>
                            <div className="d-stay-rec-right">
                                <span className="d-best-badge">
                                    Best fit
                                </span>
                                <div className="travel-opt-price stay-rec-price-mt">
                                    ₹700/night
                                </div>
                                <div className="travel-opt-dur">
                                    4 nights = ₹2,800
                                </div>
                            </div>
                        </div>
                        <div className={`${buildStayRecRadioClass(selected)} stay-radio-mt`} />
                    </div>

                    <div className="planner-section-label mt-2">
                        Other options
                    </div>
                    <div className="d-stay-grid">
                        {renderMobileStayCards()}
                    </div>
                </div>

                <div className="hidden flex-col gap-6 md:flex">
                    <div>
                        <p className={`${SECTION_LABEL} mb-3`}>
                            Recommended
                        </p>
                        <button
                            type="button"
                            onClick={handleSelectRec}
                            className={buildDesktopRecButtonClass(selected)}
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                                <Hotel className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                            </div>
                            <div className="min-w-0 flex-1 text-left">
                                <div className="text-sm font-medium text-gray-900">
                                    Budget hotel (central)
                                </div>
                                <p className="mt-0.5 text-xs font-normal text-gray-500">
                                    Mall Road area · AC · WiFi
                                </p>
                                <Stars filled={3} />
                            </div>
                            <div className="shrink-0 text-right">
                                <div className="text-sm font-semibold text-gray-900">
                                    ₹700/night
                                </div>
                                <div className="text-xs text-gray-500">
                                    4 nights = ₹2,800
                                </div>
                                <span className="mt-1 inline-block rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-medium text-blue-800">
                                    Best fit
                                </span>
                            </div>
                        </button>
                    </div>

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

export default Stay;
