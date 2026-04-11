const STEP_LABELS = ["Travel", "Stay", "Food", "Local", "Plan"];

function ProgressBar(props)
{
    const
    {
        activeStep = 0,
        preTravel = false,
    } = props;

    function renderSeparator(index)
    {
        if (index >= STEP_LABELS.length - 1)
        {
            return null;
        }

        return (
            <span className="planner-step-bar-sep" aria-hidden="true">
                —
            </span>
        );
    }

    function renderStepLabel(label, index)
    {
        let isDone = false;
        if (!preTravel)
        {
            if (index < activeStep)
            {
                isDone = true;
            }
        }

        let isActive = false;
        if (preTravel)
        {
            if (index === 0)
            {
                isActive = true;
            }
        }
        else
        {
            if (index === activeStep)
            {
                isActive = true;
            }
        }

        let itemClass = "planner-step-bar-item";
        if (isDone)
        {
            itemClass += " planner-step-bar-item--done";
        }
        if (isActive)
        {
            itemClass += " planner-step-bar-item--active";
        }

        return (
            <span key={label} className={itemClass}>
                {label}
                {renderSeparator(index)}
            </span>
        );
    }

    function renderSteps()
    {
        return STEP_LABELS.map(function mapStep(label, index)
        {
            return renderStepLabel(label, index);
        });
    }

    return (
        <div className="planner-step-bar" role="navigation" aria-label="Planning steps">
            <div className="planner-step-bar-inner">
                {renderSteps()}
            </div>
            <div className="planner-step-bar-line" aria-hidden="true" />
        </div>
    );
}

export default ProgressBar;
