import React, { useState } from "react";
import "./findCharacter.scss";

const FindCharacter = ({ characters, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [characterNotFound, setCharacterNotFound] = useState(false);

  const handleCharacterClick = () => {
    const scrollToOffset = 360;
    window.scrollTo({
      top: scrollToOffset,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundCharacter = characters.find((character) => character.name.toLowerCase() === searchTerm.toLowerCase());
    if (foundCharacter) {
      handleCharacterClick();
      onSearch(searchTerm);
      setCharacterNotFound(false);
    } else {
      setCharacterNotFound(true);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setCharacterNotFound(false);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div className="find__char">
      <form
        className="find__char__form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h2 className="form__title">Or find a character by name:</h2>
        <div>
          <input type="text" className={`find__char__input ${isInputFocused || searchTerm ? "active" : ""}`} placeholder="Enter name" value={searchTerm} onChange={handleChange} onFocus={handleInputFocus} onBlur={handleInputBlur} />
          <button type="submit" className="button find__char__button">
            FIND
          </button>
        </div>
        <div>{characterNotFound && <p className="character__not__found">The character was not found. Check the name and try again</p>}</div>
      </form>
    </div>
  );
};

export default FindCharacter;
