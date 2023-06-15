import "./characters.scss";

import CharacterInfo from "../characterInfo/CharacterInfo";
import CharactersList from "../charactersList/CharactersList";
import FindCharacter from "../findCharacter/FindCharacter";

const Characters = () => {
  return (
    <div className="characters">
      <div className="characters__list">
        <CharactersList />
      </div>
      <div className="character__info">
        <CharacterInfo />
        <FindCharacter />
      </div>
    </div>
  );
};

export default Characters;
