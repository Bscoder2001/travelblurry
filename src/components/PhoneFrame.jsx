function PhoneFrame(props)
{
    const
    {
        children,
        planner,
    } = props;

    let shellClass = "page-shell";
    if (planner)
    {
        shellClass += " planner-page-shell";
    }

    return (
        <div className={shellClass}>
            <div className="phone-frame">
                {children}
            </div>
        </div>
    );
}

export default PhoneFrame;
