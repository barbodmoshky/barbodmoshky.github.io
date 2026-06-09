import "../styles/Gallery.css";

export default function PhotoItem({ imgSrc, imgAlt, title, description, date }) {
  return (
    <div className="photo-item">
      <div className="photo-image-wrapper">
        <img src={imgSrc} alt={imgAlt} loading="lazy" className="photo-image" />
        <div className="photo-overlay">
          <p className="photo-date">{date}</p>
        </div>
      </div>
      <div className="photo-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
