import { useState, useEffect } from "react";
import CardHolder from "./CardHolder";
import gifUrls from "../assets/urls.json";

function MemoryGame() {
  const [numCards, setNumCards] = useState(12);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [shuffledUrls, setShuffledUrls] = useState([]);

  useEffect(() => {});

  useEffect(() => {
    setShuffledUrls(shuffleArray(gifUrls.slice(0, numCards)));
  }, [numCards]);

  function handleCardClick(url) {
    if (clickedCards.includes(url)) {
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      setClickedCards([...clickedCards, url]);

      if (newScore > highScore) {
        setHighScore(newScore);
      }
      setShuffledUrls(shuffleArray(shuffledUrls));
    }
  }

  return (
    <>
      <div id="top">
        <div>
          <h1>Tom and Jerry Memory Game</h1>
          <p>See how many pictures you can click only once</p>
        </div>
        <div>
          <div>Current Score: {currentScore}</div>
          <div>High Score: {highScore}</div>
        </div>
        <div>
          <p>Enter number of Cards: </p>
          <input
            type="number"
            id="numCards"
            name="numCards"
            value={numCards}
            max={50}
            min={5}
            onChange={(e) => setNumCards(e.target.value)}
          />
        </div>
      </div>
      <CardHolder urls={shuffledUrls} onCardClick={handleCardClick} />
    </>
  );
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

export default MemoryGame;
