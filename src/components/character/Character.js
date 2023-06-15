import "./character.scss";

import charImg from "../../img/character.jpg";

const Character = () => {
  return (
    <div>
      <div className="character">
        <img src={charImg} alt="Character" className="character__image" />
        <div className="character__name">THOR</div>
      </div>
    </div>
  );
};

export default Character;
