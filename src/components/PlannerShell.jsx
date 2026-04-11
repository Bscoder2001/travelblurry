import { useNavigate } from "react-router-dom";
import PhoneFrame from "./PhoneFrame";

function PlannerShell(props)
{
    const
    {
        mobileHeaderLeft,
        mobileHeaderRight,
        children,
        footer,
        innerClassName = "",
    } = props;

    const navigate = useNavigate();

    function handlePlanTripClick()
    {
        navigate("/mode-select");
    }

    function renderLeftSlot()
    {
        if (mobileHeaderLeft)
        {
            return mobileHeaderLeft;
        }

        return <span className="planner-header-spacer" />;
    }

    function renderRightSlot()
    {
        if (mobileHeaderRight)
        {
            return mobileHeaderRight;
        }

        return <span className="planner-header-spacer" />;
    }

    let scrollClass = "content-scroll planner-content-scroll md:min-h-screen md:bg-gradient-to-b md:from-slate-50 md:to-white";
    if (innerClassName)
    {
        scrollClass += " ";
        scrollClass += innerClassName;
    }

    return (
        <PhoneFrame planner>
            <div className="planner-mobile-header app-header">
                {renderLeftSlot()}
                <span className="logo-text">
                    travel
                    <span className="logo-dot">blurry</span>
                </span>
                {renderRightSlot()}
            </div>

            <header className="h-header planner-desktop-header">
                <span className="logo-text">
                    travel
                    <span className="logo-dot">blurry</span>
                </span>

                <nav className="h-nav" aria-label="Main">
                    <a href="/plan-year" className="h-nav-link">
                        Plan My Year
                    </a>
                    <a href="/mode-select" className="h-nav-link">
                        How it works
                    </a>
                    <button type="button" className="h-nav-cta" onClick={handlePlanTripClick}>
                        Plan Trip
                    </button>
                </nav>
            </header>

            <div className={scrollClass}>
                {children}
            </div>

            {footer}
        </PhoneFrame>
    );
}

export default PlannerShell;
