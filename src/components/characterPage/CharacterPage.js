import React from "react";
import ComicsBanner from "../comicsBanner/ComicsBanner";
import "./characterPage.scss";
const CharacterPage = ({ character, onBackButtonClick }) => {
  const { name, description, thumbnail } = character;
  const charImgSrc = thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : null;
  let displayDescription;
  if (description && description.length > 0) {
    displayDescription = description;
  } else {
    displayDescription = "No description available for this character. :(";
  }
  return (
    <div className="char__page__wrap">
      <ComicsBanner />
      <div className="char__page__buttons">
          <button className="back__button" onClick={onBackButtonClick}>
            Back to all
          </button>
        </div>
      <div className="char__page">
        <div className="char__page__img__wrapp">
          <div className="char__img">
            <img src={charImgSrc} alt={name} />
          </div>
        </div>
        <div className="char__text">
          <div className="char__name">{name}</div>
          <div className="char__description">{displayDescription}</div>
        </div>
      </div>
    </div>
  );
};
export default CharacterPage;
