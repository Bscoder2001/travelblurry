function Stars(props)
{
    const
    {
        filled,
        total = 5,
    } = props;

    function renderStar(index)
    {
        let starClass = "star";
        if (index >= filled)
        {
            starClass += " empty";
        }

        return (
            <div key={index} className={starClass} />
        );
    }

    function renderStars()
    {
        return Array.from({ length: total }, function mapStar(_, index)
        {
            return renderStar(index);
        });
    }

    return (
        <div className="stay-rating">
            {renderStars()}
        </div>
    );
}

export default Stars;
