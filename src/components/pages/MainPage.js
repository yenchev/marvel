import React, { useEffect, useState } from "react";
import RandomCharacter from "../randomCharacter/RandomCharacter";
import Characters from "../characters/Characters";
import CharacterPage from "../characterPage/CharacterPage";
import bgImg from "../../img/bg down.png";
import "./mainPage.scss";

const MainPage = ({ characters }) => {
  const [randomCharacter, setRandomCharacter] = useState(null);
  const [showRandomCharacter, setShowRandomCharacter] = useState(true);
  const [showCharacters, setShowCharacters] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    fetchRandomCharacter();
  }, []);

  const fetchRandomCharacter = () => {
    fetch("https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=bce6ca9570f4f680692a66a6083461ce")
      .then((response) => response.json())
      .then((data) => {
        const characters = data.data.results;
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomCharacter = characters[randomIndex];
        setRandomCharacter(randomCharacter);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const reloadRandomCharacter = () => {
    fetchRandomCharacter();
  };

  const handleGoToCharacterPage = (character) => {
    setSelectedCharacter(character);
    setShowRandomCharacter(false);
    setShowCharacters(false);
  };

  const handleBackButtonClick = () => {
    setShowRandomCharacter(true);
    setShowCharacters(true);
  };

  return (
    <div className="main__page">
      {showRandomCharacter && <RandomCharacter character={randomCharacter} onReloadCharacter={reloadRandomCharacter} onGoToCharacterPage={handleGoToCharacterPage} />}

      {showCharacters && <Characters characters={characters} onGoToCharacterPage={handleGoToCharacterPage} />}

      {!showRandomCharacter && !showCharacters && <CharacterPage character={selectedCharacter} onBackButtonClick={handleBackButtonClick} />}

      <img className="bg__Img" src={bgImg} alt="bgImg" />
    </div>
  );
};

export default MainPage;
