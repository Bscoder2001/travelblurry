import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PhoneFrame from "../components/PhoneFrame";
import SkeletonCard from "../components/ui/SkeletonCard";

const STEPS = [
    { label: "Checking transport options", done: true, active: false },
    { label: "Finding best stays...", done: false, active: true },
    { label: "Calculating day-by-day budget", done: false, active: false },
];

function buildLoadStepClass(step)
{
    let cls = "d-load-step";
    if (step.done)
    {
        cls += " d-load-step--done";
    }
    if (step.active)
    {
        cls += " d-load-step--active";
    }
    return cls;
}

function Loading()
{
    const navigate = useNavigate();

    function handleSkip()
    {
        navigate("/plan");
    }

    function renderSteps()
    {
        return STEPS.map(function mapStep(step, index)
        {
            return (
                <div key={index} className={buildLoadStepClass(step)}>
                    <span className="d-load-step-dot" />
                    <span className="d-load-step-text">
                        {step.label}
                    </span>
                </div>
            );
        });
    }

    return (
        <PhoneFrame>
            <div className="app-header">
                <span className="logo-text">
                    travel
                    <span className="logo-dot">blurry</span>
                </span>
            </div>

            <div className="content-scroll">
                <div className="d-wrap d-wrap--sm">
                    <motion.div
                        className="d-loading-center"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="loading-spinner" />

                        <h2 className="d-loading-title">
                            Building your trip plan
                        </h2>
                        <p className="d-loading-sub">
                            Searching best options within ₹15,000 for 5 days to Manali
                        </p>

                        <div className="loading-dots loading-dots--mb md:hidden">
                            <div className="loading-dot" />
                            <div className="loading-dot" />
                            <div className="loading-dot" />
                        </div>

                        <div className="hidden w-full max-w-md flex-col gap-2 md:flex">
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                        </div>

                        <div className="d-load-prog-track">
                            <div className="d-load-prog-fill d-load-prog-fill--pct-45" />
                        </div>
                        <p className="d-load-prog-label">
                            45% complete
                        </p>

                        <div className="d-load-steps">
                            {renderSteps()}
                        </div>

                        <button
                            type="button"
                            className="secondary-btn loading-skip-btn"
                            onClick={handleSkip}
                        >
                            Skip — show plan now
                        </button>
                    </motion.div>
                </div>
            </div>
        </PhoneFrame>
    );
}

export default Loading;
