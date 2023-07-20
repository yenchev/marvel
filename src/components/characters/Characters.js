import React, { useState } from "react";
import "./characters.scss";
import CharacterSkeleton from "../characterSkeleton/CharacterSkeleton";
import CharacterInfo from "../characterInfo/CharacterInfo";
import CharactersList from "../charactersList/CharactersList";
import FindCharacter from "../findCharacter/FindCharacter";

const Characters = ({ characters, onGoToCharacterPage }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleSearch = (searchTerm) => {
    const foundCharacter = characters.find((character) => character.name.toLowerCase() === searchTerm.toLowerCase());
    setSelectedCharacter(foundCharacter);
  };

  return (
    <div className="characters">
      <div className="characters__list">
        <CharactersList characters={characters} onCharacterClick={handleCharacterClick} />
      </div>
      <div className="character__info">
        {selectedCharacter ? (
          <CharacterInfo name={selectedCharacter.name} imageUrl={`${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`} description={selectedCharacter.description} urls={selectedCharacter.urls} comics={selectedCharacter.comics} onGoToCharacterPage={onGoToCharacterPage} />
        ) : (
          <CharacterSkeleton />
        )}
        <FindCharacter characters={characters} onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Characters;
