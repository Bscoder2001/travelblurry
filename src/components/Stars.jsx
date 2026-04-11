const Stars = ({ filled, total = 5 }) => (
  <div className="stay-rating">
    {Array.from({ length: total }, (_, i) => (
      <div key={i} className={`star${i >= filled ? " empty" : ""}`}></div>
    ))}
  </div>
);

export default Stars;
