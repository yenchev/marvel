import "./charactersList.scss";
import Character from "../character/Character";

const CharactersList = () => {
  return (
    <div>
      <div className="characters__list">
        <div className="row">
          <Character />
          <Character />
          <Character />
        </div>
        <div className="row">
          <Character />
          <Character />
          <Character />
          <button className="button load__button">Load More </button>
        </div>
        <div className="row">
          <Character />
          <Character />
          <Character />
        </div>
      </div>
    </div>
  );
};

export default CharactersList;
