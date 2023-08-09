import React, { useState, useEffect } from "react";
import charImg from "../../img/character.jpg";
import decoration from "../../img/Decoration.png";
import spinner from "../../img/spinner.gif";
import "./randomCharacter.scss";

const RandomCharacter = ({ character, onReloadCharacter, onGoToCharacterPage }) => {
  const { name, description, thumbnail, urls } = character || {};
  const charImgSrc = thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : charImg;
  const truncatedName = name ? (window.innerWidth < 425 ? (name.length > 12 ? name.slice(0, 12) + "..." : name) : window.innerWidth < 667 ? (name.length > 15 ? name.slice(0, 15) + "..." : name) : name.length > 20 ? name.slice(0, 20) + "..." : name) : "";
  const truncatedDescription = description ? (description.length > 100 ? (window.innerWidth < 667 ? description.slice(0, 80) + "..." : description.slice(0, 100) + "...") : description) : "No description available for this character.";

  const [isLoading, setIsLoading] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    setIsLoading(!character);
  }, [character]);

  const handleReloadCharacter = () => {
    if (!isButtonDisabled) {
      setIsLoading(true);
      setIsButtonDisabled(true);
      onReloadCharacter();

      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 1000);
    }
  };

  const handleGoToCharacterPage = () => {
    onGoToCharacterPage(character);
  };

  const goToWiki = () => {
    window.location.href = urls[1].url;
  };

  return (
    <div className="random__char__wrapper">
      <div className={`left__block ${isLoading ? "loading" : ""}`}>
        {isLoading ? (
          <img src={spinner} alt="Loading" className="spinner" />
        ) : (
          <div className="loaded">
            <div className="character__img">
              <img src={charImgSrc} alt="Character" className="character__image" />
            </div>
            <div className="character__info">
              <h2 className="character__name">{truncatedName}</h2>
              <p className="character__description">{truncatedDescription}</p>
              <div className="buttons">
                <button className="button home__button" onClick={handleGoToCharacterPage}>
                  HOMEPAGE
                </button>
                <button className="button wiki__button" onClick={goToWiki}>
                  WIKI
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="right__block">
        <div className="text__block">
          <h3 className="text__heading">
            Random character for today! <br /> Do you want to get to know him better?
          </h3>
          <p className="text__subheading">Or choose another one</p>
          <div className="buttons">
            <button className="button" onClick={handleReloadCharacter} disabled={isButtonDisabled}>
              TRY IT
            </button>
          </div>
        </div>

        <img src={decoration} alt="img" className="image" />
      </div>
    </div>
  );
};

export default RandomCharacter;
