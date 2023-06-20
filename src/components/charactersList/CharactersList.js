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
        </div>
        <div className="row">
          <Character />
          <Character />
          <Character />
        </div>
      </div>
      <div className="button__wrapper">
        <button className="button load__button">Load More </button>
      </div>
    </div>
  );
};

export default CharactersList;
