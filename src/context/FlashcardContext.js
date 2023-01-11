import { createContext, useContext, useState } from 'react';

const FlashcardContext = createContext();

export function FlashcardProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const addCard = (front, back) => {
    setCards((prev) => [...prev, { id: Date.now(), front, back }]);
  };

  const removeCard = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <FlashcardContext.Provider
      value={{ cards, currentIndex, addCard, removeCard, nextCard, prevCard }}
    >
      {children}
    </FlashcardContext.Provider>
  );
}

export function useFlashcards() {
  const context = useContext(FlashcardContext);
  if (!context) {
    throw new Error('useFlashcards must be used within a FlashcardProvider');
  }
  return context;
}
