function renderChipSpanGrid(chip)
{
    if (!chip)
    {
        return null;
    }

    return (
        <span className="mt-0.5 inline-block rounded bg-gray-100 px-1 py-0.5 text-[10px] font-medium text-gray-600">
            {chip}
        </span>
    );
}

function renderPriceSecondaryGrid(priceSecondary)
{
    if (!priceSecondary)
    {
        return null;
    }

    return (
        <div className="text-xs font-normal text-gray-500">
            {priceSecondary}
        </div>
    );
}

function renderGridButton(props)
{
    const
    {
        selected,
        onClick,
        Icon,
        title,
        chip,
        description,
        pricePrimary,
        priceSecondary,
    } = props;

    let buttonClass = `
flex flex-col items-stretch gap-2 rounded-xl border border-gray-200 bg-white p-3 text-left shadow-sm transition-all duration-200
hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99]
`.replace(/\s+/g, " ").trim();

    if (selected)
    {
        buttonClass += " border-blue-200 bg-blue-50 shadow-sm";
    }

    return (
        <button type="button" onClick={onClick} className={buttonClass}>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
            </div>
            <div className="min-w-0">
                <div className="text-sm font-medium text-gray-900 leading-tight">
                    {title}
                </div>
                {renderChipSpanGrid(chip)}
                <p className="mt-1 line-clamp-2 text-xs font-normal text-gray-500">
                    {description}
                </p>
            </div>
            <div className="mt-auto pt-1">
                <div className="text-sm font-semibold text-gray-900">
                    {pricePrimary}
                </div>
                {renderPriceSecondaryGrid(priceSecondary)}
            </div>
        </button>
    );
}

function renderRecommendedBadge()
{
    return (
        <span className="absolute right-3 top-3 rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-medium text-blue-700 ring-1 ring-blue-200/80">
            Recommended
        </span>
    );
}

function renderChipSpanRow(chip)
{
    if (!chip)
    {
        return null;
    }

    return (
        <span className="rounded-md bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-600">
            {chip}
        </span>
    );
}

function renderPriceSecondaryRow(priceSecondary)
{
    if (!priceSecondary)
    {
        return null;
    }

    return (
        <div className="text-xs font-normal text-gray-500">
            {priceSecondary}
        </div>
    );
}

function renderRadioInner(selected)
{
    if (!selected)
    {
        return null;
    }

    return (
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
    );
}

function renderRowButton(props)
{
    const
    {
        selected,
        onClick,
        recommended,
        Icon,
        title,
        chip,
        description,
        pricePrimary,
        priceSecondary,
    } = props;

    let buttonClass = `
group relative flex w-full items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 text-left shadow-sm transition-all duration-200
hover:-translate-y-0.5 hover:shadow-md
active:scale-[0.99]
`.replace(/\s+/g, " ").trim();

    if (selected)
    {
        buttonClass += " border-blue-200 bg-blue-50 shadow-sm";
        buttonClass += " before:absolute before:bottom-0 before:left-0 before:top-0 before:w-1 before:rounded-l-xl before:bg-blue-500 before:content-['']";
    }

    let radioOuterClass = "flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-gray-300";
    if (selected)
    {
        radioOuterClass += " border-blue-500 bg-blue-500 ring-2 ring-blue-200";
    }

    function renderRecommendedIfNeeded()
    {
        if (!recommended)
        {
            return null;
        }

        return renderRecommendedBadge();
    }

    return (
        <button type="button" onClick={onClick} className={buttonClass}>
            {renderRecommendedIfNeeded()}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">
                        {title}
                    </span>
                    {renderChipSpanRow(chip)}
                </div>
                <p className="mt-0.5 text-xs font-normal text-gray-500">
                    {description}
                </p>
            </div>
            <div className="shrink-0 text-right">
                <div className="text-sm font-semibold text-gray-900">
                    {pricePrimary}
                </div>
                {renderPriceSecondaryRow(priceSecondary)}
            </div>
            <div className={radioOuterClass} aria-hidden>
                {renderRadioInner(selected)}
            </div>
        </button>
    );
}

function OptionCard(props)
{
    const
    {
        variant = "row",
    } = props;

    if (variant === "grid")
    {
        return renderGridButton(props);
    }

    return renderRowButton(props);
}

export default OptionCard;
