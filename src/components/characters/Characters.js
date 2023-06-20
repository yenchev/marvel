import "./characters.scss";
import CharacterSkeleton from "../characterSkeleton/CharacterSkeleton";

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
        {/* <CharacterInfo /> */}
        <CharacterSkeleton />
        <FindCharacter />
      </div>
    </div>
  );
};

export default Characters;
