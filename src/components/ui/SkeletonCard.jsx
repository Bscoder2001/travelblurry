function SkeletonCard(props)
{
    const { className } = props;

    let cardClass = "h-16 animate-pulse rounded-lg bg-gray-100";
    if (className)
    {
        cardClass += " ";
        cardClass += className;
    }

    return (
        <div className={cardClass} aria-hidden />
    );
}

export default SkeletonCard;
