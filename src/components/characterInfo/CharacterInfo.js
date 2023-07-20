import React from "react";
import "./characterInfo.scss";
const CharacterInfo = ({ name, imageUrl, description, comics, onGoToCharacterPage, urls }) => {
  const truncateName = (name, maxLength) => {
    if (name.length <= maxLength) {
      return name;
    } else {
      return name.substring(0, maxLength) + "...";
    }
  };
  const truncatedName = truncateName(name, 18);
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
    <div className="wrapper">
      <div className="character__info">
        <div className="character__info__main">
          <div>
            <img src={imageUrl} alt="Character" />
          </div>
          <div className="name__butt__wrapp">
            <div className="character__name">{truncatedName}</div>
            <div className="buttons">
              <button className="button home-button" onClick={handleGoToHomePage}>
                HOMEPAGE
              </button>
              <button className="button wiki-button" onClick={goToWiki}>
                WIKI
              </button>
            </div>
          </div>
        </div>
        <div className="character__descr">{description}</div>
        <div className="character__comics">
          <h2>Comics:</h2>
          {comics.items && comics.items.length > 0 ? (
            <ul>
              {comics.items.map((comic, index) => (
                <li
                  key={index}
                  onClick={() => {
                    window.location.href = comic.resourceURI;
                  }}
                >
                  {comic.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-comics">This character does not have any comics.</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default CharacterInfo;
