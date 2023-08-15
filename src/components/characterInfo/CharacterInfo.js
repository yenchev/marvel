import React from "react";
import "./characterInfo.scss";
const CharacterInfo = ({ name, imageUrl, description, comics, onGoToCharacterPage, urls }) => {
  const handleGoToHomePage = () => {
    onGoToCharacterPage({
      name,
      thumbnail: { path: imageUrl.substring(0, imageUrl.lastIndexOf(".")), extension: imageUrl.substring(imageUrl.lastIndexOf(".") + 1) },
      description,
      comics,
    });
  };
  const goToWiki = () => {
    window.location.href = urls[1].url;
  };

  return (
    <div className="character__info">
      <img src={imageUrl} alt="Character" className="char__inf__img" />
      <div className="character__name">{name}</div>
      <div className="buttons">
        <button className="button home-button" onClick={handleGoToHomePage}>
          HOMEPAGE
        </button>
        <button className="button wiki-button" onClick={goToWiki}>
          WIKI
        </button>
      </div>
      <div className="character__descr">{description}</div>
      <div className="character__comics">
        <h2 className="comics__title">Comics</h2>
        {comics.items && comics.items.length > 0 ? (
          <ul className="comics__list">
            {comics.items.map((comic, index) => (
              <li key={index} className="comics__item">
                {comic.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-comics">This character does not have any comics.</p>
        )}
      </div>
    </div>
  );
};
export default CharacterInfo;
