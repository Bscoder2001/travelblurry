function StepHero(props)
{
    const
    {
        stepLabel,
        title,
        subtitle,
        imageSrc,
        imageAlt,
        className,
        showMobileMeta = true,
        planHero = false,
        trailing = null,
    } = props;

    let rootClass = "space-y-4";
    if (className)
    {
        rootClass += " ";
        rootClass += className;
    }

    let imageWrapClass = "mb-6 hidden w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm md:block";
    if (planHero)
    {
        imageWrapClass += " h-52";
    }
    else
    {
        imageWrapClass += " aspect-[16/6]";
    }

    function renderTrailing()
    {
        if (!trailing)
        {
            return null;
        }

        return (
            <div className="shrink-0 md:pt-0.5">
                {trailing}
            </div>
        );
    }

    function renderMetaBlock()
    {
        if (!showMobileMeta)
        {
            return null;
        }

        return (
            <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                    {stepLabel}
                </p>
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900">
                            {title}
                        </h1>
                        <p className="mt-1 text-sm text-gray-500">
                            {subtitle}
                        </p>
                    </div>
                    {renderTrailing()}
                </div>
            </div>
        );
    }

    return (
        <div className={rootClass}>
            {renderMetaBlock()}
            <div className={imageWrapClass}>
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
            </div>
        </div>
    );
}

export default StepHero;
