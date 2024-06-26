
import "../../style/components/tour-card.scss";

export default function Tour({ tour, addToCart }) {

  const { id, name, price, img, city } = tour;

  return (
    <div className="tour-card">
      <img className="tour-card__img" src={img} alt="" />
      <div className="tour-card__content">
        <h3 className="tour-card__content_city-name">{city}</h3>
        <h4 className="tour-card__content_tour-name">{name}</h4>
        <p className="tour-card__country">
          Country:{" "}
          <span>
            <b>{tour.country}</b> 
          </span>
        </p>
        <p className="tour-card__continent">
          Continent:{" "}
          <span>
            <b>{tour.continent}</b>
          </span>
        </p>
        <p className="tour-card__price">Price: {price} $</p>
        <button className="button" onClick={() => addToCart(id, name, price, img)}>Add to cart</button>
      </div>
    </div>
  );
}
