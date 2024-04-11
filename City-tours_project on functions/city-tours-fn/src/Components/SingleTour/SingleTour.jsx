import '../../style/components/tour-card.scss'

export default function SingleTour({props}) {
  return (
    <div className="tour-card">
      <img src={props.img} alt="" />
      <h3 className="tour-card__city-name">{props.city}</h3>
      <h4 className="tour-card__tour-name">{props.name}</h4>
      <p className="tour-card__info">info</p>
      <p className="tour-card__description">{props.description}</p>
    </div>
  );
}
