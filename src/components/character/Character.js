import React from "react";
import "./character.scss";

const Character = ({ character, onClick }) => {
  const { name, thumbnail } = character;

  return (
    <div>
      <div className="character" onClick={onClick}>
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="Character" className="character__image" />
        <div className="character__name">{name}</div>
      </div>
    </div>
  );
};

export default Character;
