function StatCard(props)
{
    const
    {
        label,
        value,
        className,
        valueClassName,
    } = props;

    let cardClass = "rounded-xl border border-gray-200 bg-white p-4 shadow-sm";
    if (className)
    {
        cardClass += " ";
        cardClass += className;
    }

    let valueRowClass = "flex items-center gap-2 text-lg font-semibold text-gray-900";
    if (valueClassName)
    {
        valueRowClass += " ";
        valueRowClass += valueClassName;
    }

    return (
        <div className={cardClass}>
            <div className={valueRowClass}>
                {value}
            </div>
            <div className="mt-1 text-xs font-normal text-gray-500">
                {label}
            </div>
        </div>
    );
}

export default StatCard;
