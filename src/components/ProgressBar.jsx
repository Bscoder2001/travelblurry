const STEP_LABELS = ["Travel", "Stay", "Food", "Local", "Plan"];

/**
 * @param {number} activeStep — 0–4: current step (Travel … Plan)
 * @param {boolean} preTravel — mode-select: only “Travel” emphasized as next
 */
const ProgressBar = ({ activeStep = 0, preTravel = false }) => (
  <div className="planner-step-bar" role="navigation" aria-label="Planning steps">
    <div className="planner-step-bar-inner">
      {STEP_LABELS.map((label, i) => {
        const isDone = !preTravel && i < activeStep;
        const isActive = preTravel ? i === 0 : i === activeStep;
        let cls = "planner-step-bar-item";
        if (isDone) cls += " planner-step-bar-item--done";
        if (isActive) cls += " planner-step-bar-item--active";
        return (
          <span key={label} className={cls}>
            {label}
            {i < STEP_LABELS.length - 1 && <span className="planner-step-bar-sep" aria-hidden="true">—</span>}
          </span>
        );
      })}
    </div>
    <div className="planner-step-bar-line" aria-hidden="true" />
  </div>
);

export default ProgressBar;
