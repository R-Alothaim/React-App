import './Card.css';

function Card({ front, back, flipped, onClick }) {
  return (
    <div className={`card ${flipped ? 'card--flipped' : ''}`} onClick={onClick}>
      <div className="card__inner">
        <div className="card__front">
          <p>{front}</p>
        </div>
        <div className="card__back">
          <p>{back}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
