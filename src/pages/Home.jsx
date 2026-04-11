import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ROUTES = [
    { icon: "🏔️", name: "Manali", days: "3–5 days", budget: "₹8,000+", tag: "Hill station" },
    { icon: "🌊", name: "Goa", days: "4–6 days", budget: "₹12,000+", tag: "Beach" },
    { icon: "🏯", name: "Jaipur", days: "3–4 days", budget: "₹10,000+", tag: "Heritage" },
    { icon: "🌿", name: "Coorg", days: "3 days", budget: "₹9,000+", tag: "Nature" },
    { icon: "🏙️", name: "Mumbai", days: "4 days", budget: "₹14,000+", tag: "City" },
];

const HOW = [
    { n: "01", title: "Enter trip details", desc: "Set your origin, destination, days and budget." },
    { n: "02", title: "Customize preferences", desc: "Pick transport, stay, food and local travel." },
    { n: "03", title: "Get your itinerary", desc: "Receive a day-by-day budget-optimised plan." },
];

function buildPlanCardClass(activeType, cardType)
{
    let cls = "h-plan-card";
    if (activeType === cardType)
    {
        cls += " h-plan-card--active";
    }
    return cls;
}

function buildHmLineClass(menuOpen, line)
{
    let cls = "hm-line";
    if (!menuOpen)
    {
        return cls;
    }
    if (line === "top")
    {
        cls += " open-top";
    }
    if (line === "mid")
    {
        cls += " open-mid";
    }
    if (line === "bot")
    {
        cls += " open-bot";
    }
    return cls;
}

function Home()
{
    const navigate = useNavigate();
    const [planType, setPlanType] = useState("trip");
    const [pref, setPref] = useState("balanced");
    const [transport, setTransport] = useState("any");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    function handleNavigateModeSelect()
    {
        navigate("/mode-select");
    }

    function handleToggleMobileMenu()
    {
        setMobileMenuOpen(function togglePrev(prev)
        {
            return !prev;
        });
    }

    function handleCloseMobileMenu()
    {
        setMobileMenuOpen(false);
    }

    function handlePlanTripFromMenu()
    {
        setMobileMenuOpen(false);
        navigate("/mode-select");
    }

    function handleSetPlanTypeTrip()
    {
        setPlanType("trip");
    }

    function handleSetPlanTypeYear()
    {
        setPlanType("year");
    }

    function handlePrefChange(event)
    {
        setPref(event.target.value);
    }

    function handleTransportChange(event)
    {
        setTransport(event.target.value);
    }

    function handleRouteCardClick()
    {
    }

    let plannerFieldLabel = "Where are you going?";
    if (planType !== "trip")
    {
        plannerFieldLabel = "Plan your year";
    }

    function renderMobileMenu()
    {
        if (!mobileMenuOpen)
        {
            return null;
        }

        return (
            <div className="h-mobile-menu">
                <a href="/plan-year" className="h-mm-link" onClick={handleCloseMobileMenu}>
                    Plan My Year
                </a>
                <a href="/mode-select" className="h-mm-link" onClick={handleCloseMobileMenu}>
                    How it works
                </a>
                <button type="button" className="cta-btn h-mm-cta-mt" onClick={handlePlanTripFromMenu}>
                    Plan Trip
                </button>
            </div>
        );
    }

    function renderHowSteps()
    {
        return HOW.map(function mapStep(s)
        {
            return (
                <div key={s.n} className="h-how-step">
                    <span className="h-how-num">
                        {s.n}
                    </span>
                    <div>
                        <span className="h-how-title">
                            {s.title}
                        </span>
                        <span className="h-how-desc">
                            {s.desc}
                        </span>
                    </div>
                </div>
            );
        });
    }

    function renderRoutes()
    {
        return ROUTES.map(function mapRoute(r)
        {
            return (
                <button
                    key={r.name}
                    type="button"
                    className="h-route-card"
                    onClick={handleRouteCardClick}
                >
                    <span className="h-route-icon">
                        {r.icon}
                    </span>
                    <span className="h-route-tag">
                        {r.tag}
                    </span>
                    <span className="h-route-name">
                        {r.name}
                    </span>
                    <span className="h-route-meta">
                        {r.days}
                    </span>
                    <span className="h-route-budget">
                        {r.budget}
                    </span>
                </button>
            );
        });
    }

    return (
        <div className="h-page-shell">
            <header className="h-header">
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
                    <button type="button" className="h-nav-cta" onClick={handleNavigateModeSelect}>
                        Plan Trip
                    </button>
                </nav>

                <button
                    type="button"
                    className="h-hamburger"
                    aria-label="Menu"
                    onClick={handleToggleMobileMenu}
                >
                    <span className={buildHmLineClass(mobileMenuOpen, "top")} />
                    <span className={buildHmLineClass(mobileMenuOpen, "mid")} />
                    <span className={`${buildHmLineClass(mobileMenuOpen, "bot")} hm-line--narrow`} />
                </button>
            </header>

            {renderMobileMenu()}

            <main className="h-main">
                <div className="h-content">
                    <section className="h-hero-grid">
                        <div className="h-hero-left">
                            <span className="hero-tag">
                                Smart trip planner
                            </span>
                            <h1 className="h-h1">
                                Build your trip step-by-step within your budget
                            </h1>
                            <p className="h-sub">
                                Choose travel, stay and preferences — or let us plan automatically.
                            </p>

                            <ul className="h-trust">
                                <li className="h-trust-item">
                                    <span className="h-trust-dot" />
                                    No booking required
                                </li>
                                <li className="h-trust-item">
                                    <span className="h-trust-dot" />
                                    Budget-first planning
                                </li>
                                <li className="h-trust-item">
                                    <span className="h-trust-dot" />
                                    Instant itinerary
                                </li>
                            </ul>

                            <div className="h-plan-cards">
                                <button
                                    type="button"
                                    className={buildPlanCardClass(planType, "trip")}
                                    onClick={handleSetPlanTypeTrip}
                                >
                                    <span className="h-plan-icon">
                                        🗺️
                                    </span>
                                    <span className="h-plan-title">
                                        Plan My Trip
                                    </span>
                                    <span className="h-plan-desc">
                                        Step-by-step itinerary builder
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    className={buildPlanCardClass(planType, "year")}
                                    onClick={handleSetPlanTypeYear}
                                >
                                    <span className="h-plan-icon">
                                        📅
                                    </span>
                                    <span className="h-plan-title">
                                        Plan My Year
                                    </span>
                                    <span className="h-plan-desc">
                                        Optimise leaves and holidays
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="h-planner-wrap">
                            <div className="h-planner-card">
                                <p className="h-planner-label">
                                    {plannerFieldLabel}
                                </p>

                                <div className="h-form-row">
                                    <div className="h-field">
                                        <label className="h-field-label" htmlFor="home-from">
                                            From
                                        </label>
                                        <div id="home-from" className="h-field-val h-field-val--placeholder">
                                            Kolkata
                                        </div>
                                    </div>
                                    <div className="h-field">
                                        <label className="h-field-label" htmlFor="home-to">
                                            To
                                        </label>
                                        <div id="home-to" className="h-field-val h-field-val--placeholder">
                                            Destination
                                        </div>
                                    </div>
                                </div>

                                <div className="h-form-row">
                                    <div className="h-field">
                                        <label className="h-field-label" htmlFor="home-days">
                                            Days
                                        </label>
                                        <div id="home-days" className="h-field-val">
                                            5 days
                                        </div>
                                        <span className="h-field-hint">
                                            Total trip duration
                                        </span>
                                    </div>
                                    <div className="h-field">
                                        <label className="h-field-label" htmlFor="home-budget">
                                            Budget
                                        </label>
                                        <div id="home-budget" className="h-field-val">
                                            ₹15,000
                                        </div>
                                        <span className="h-field-hint">
                                            Total trip budget
                                        </span>
                                    </div>
                                </div>

                                <div className="h-form-row">
                                    <div className="h-field">
                                        <label className="h-field-label" htmlFor="home-pref">
                                            Travel preference
                                        </label>
                                        <select
                                            id="home-pref"
                                            className="h-select"
                                            value={pref}
                                            onChange={handlePrefChange}
                                        >
                                            <option value="cheapest">
                                                Cheapest
                                            </option>
                                            <option value="fastest">
                                                Fastest
                                            </option>
                                            <option value="balanced">
                                                Balanced
                                            </option>
                                        </select>
                                    </div>
                                    <div className="h-field">
                                        <label className="h-field-label" htmlFor="home-transport">
                                            Transport
                                        </label>
                                        <select
                                            id="home-transport"
                                            className="h-select"
                                            value={transport}
                                            onChange={handleTransportChange}
                                        >
                                            <option value="any">
                                                Any
                                            </option>
                                            <option value="flight">
                                                Flight
                                            </option>
                                            <option value="train">
                                                Train
                                            </option>
                                            <option value="bus">
                                                Bus
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <button type="button" className="h-cta" onClick={handleNavigateModeSelect}>
                                    Start Planning →
                                </button>
                            </div>
                        </div>
                    </section>

                    <section className="h-how">
                        <p className="h-section-eyebrow">
                            How it works
                        </p>
                        <div className="h-how-steps">
                            {renderHowSteps()}
                        </div>
                    </section>

                    <section className="h-routes-section">
                        <p className="h-section-eyebrow">
                            Popular routes
                        </p>
                        <div className="h-routes-scroll">
                            {renderRoutes()}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Home;
