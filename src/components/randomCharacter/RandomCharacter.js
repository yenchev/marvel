import "./randomCharacter.scss";
import charImg from "../../img/character.jpg";
import decoration from "../../img/Decoration.png";

const RandomCharacter = () => {
  return (
    <div className="container">
      <div className="left-block">
        <div className="character-img">
          <img src={charImg} alt="Character" className="character-image" />
        </div>
        <div className="character-info">
          <h2 className="character-name">thor</h2>
          <p className="character-description">As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</p>
          <div className="buttons">
            <button className="button home-button">HOMEPAGE</button>
            <button className="button wiki-button">WIKI</button>
          </div>
        </div>
      </div>
      <div className="right-block">
        <div className="text-block">
          <h3 className="text-heading">
            Random character for today! <br /> Do you want to get to know him better?
          </h3>
          <p className="text-subheading">Or choose another one</p>
          <div className="buttons">
            <button className="button">TRY IT</button>
          </div>
        </div>

        <img src={decoration} alt="img" className="image" />
      </div>
    </div>
  );
};

export default RandomCharacter;
