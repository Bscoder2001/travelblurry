const PhoneFrame = ({ children, planner }) => (
  <div className={`page-shell${planner ? " planner-page-shell" : ""}`}>
    <div className="phone-frame">
      {children}
    </div>
  </div>
);

export default PhoneFrame;
