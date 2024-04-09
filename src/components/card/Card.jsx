import "./Card.css";

export const Card = ({ info }) => {
  const { title, subtitle, color } = info;
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  );
};
