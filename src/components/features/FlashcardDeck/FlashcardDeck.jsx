import { useState } from 'react';
import Card from '../../common/Card';
import { useFlashcards } from '../../../context/FlashcardContext';
import './FlashcardDeck.css';

function FlashcardDeck() {
  const { cards, currentIndex, nextCard, prevCard } = useFlashcards();
  const [flipped, setFlipped] = useState(false);

  if (cards.length === 0) {
    return (
      <div className="deck__empty">
        <p>No flashcards yet. Add some to get started!</p>
      </div>
    );
  }

  const currentCard = cards[currentIndex];

  const handleFlip = () => setFlipped((prev) => !prev);

  const handleNext = () => {
    setFlipped(false);
    nextCard();
  };

  const handlePrev = () => {
    setFlipped(false);
    prevCard();
  };

  return (
    <div className="deck">
      <div className="deck__counter">
        {currentIndex + 1} / {cards.length}
      </div>
      <Card
        front={currentCard.front}
        back={currentCard.back}
        flipped={flipped}
        onClick={handleFlip}
      />
      <div className="deck__controls">
        <button className="deck__btn" onClick={handlePrev}>Previous</button>
        <button className="deck__btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default FlashcardDeck;
