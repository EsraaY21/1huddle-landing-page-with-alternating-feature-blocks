export default function FeatureSection({ title, desc, sectionImage }) {
  return (
    <div className="feature_item">
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <img src={`assets/images/illustration-${sectionImage}.svg`} />
    </div>
  );
}
