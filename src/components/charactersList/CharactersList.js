import React, { useState, useEffect } from "react";
import "./charactersList.scss";
import Character from "../character/Character";

const CharactersList = ({ characters, onCharacterClick }) => {
  const [visibleCharacters, setVisibleCharacters] = useState(9);
  const [isLoading, setIsLoading] = useState(true);
  const [shuffledCharacters, setShuffledCharacters] = useState([]);

  const loadMoreCharacters = () => {
    setVisibleCharacters((prevVisibleCharacters) => prevVisibleCharacters + 9);
  };

  const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  useEffect(() => {
    const shuffledArray = shuffle(characters);
    setShuffledCharacters(shuffledArray);
  }, [characters]);

  const visibleCharacterList = shuffledCharacters.slice(0, visibleCharacters);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [shuffledCharacters]);

  const handleCharacterClick = (character) => {
    onCharacterClick(character);
    const scrollToOffset = 360;

    window.scrollTo({
      top: scrollToOffset,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="characters__list">
        {isLoading ? (
          <div className="loading__overlay"></div>
        ) : (
          visibleCharacterList.map((character) => (
            <div className="row" key={character.id}>
              <Character character={character} onClick={() => handleCharacterClick(character)} />
            </div>
          ))
        )}
      </div>
      <div className="button__wrapper">
        {!isLoading && visibleCharacters < characters.length && (
          <button className="button load__button" onClick={loadMoreCharacters}>
            load more
          </button>
        )}
      </div>
    </div>
  );
};

export default CharactersList;
