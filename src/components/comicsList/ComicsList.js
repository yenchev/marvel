import "./comicsList.scss";
import charImg from "../../img/character.jpg";

const ComicsList = () => {
  return (
    <div>
      <div className="comics__list">
        <div className="row">
          <div className="character">
            <img src={charImg} alt="Character" className="character__image" />
            <div className="character__name">THOR</div>
          </div>
          <div className="character">
            <img src={charImg} alt="Character" className="character__image" />
            <div className="character__name">THOR</div>
          </div>
        </div>
        <div className="row">
          <div className="character">
            <img src={charImg} alt="Character" className="character__image" />
            <div className="character__name">THOR</div>
          </div>
          <div className="character">
            <img src={charImg} alt="Character" className="character__image" />
            <div className="character__name">THOR</div>
          </div>
        </div>
        <div className="row">
          <div className="character">
            <img src={charImg} alt="Character" className="character__image" />
            <div className="character__name">THOR</div>
          </div>
          <div className="character">
            <img src={charImg} alt="Character" className="character__image" />
            <div className="character__name">THOR</div>
          </div>
        </div>
        <div className="row">
          <div className="character">
            <img src={charImg} alt="Character" className="character__image" />
            <div className="character__name">THOR</div>
          </div>
          <div className="character">
            <img src={charImg} alt="Character" className="character__image" />
            <div className="character__name">THOR</div>
          </div>
        </div>

        <button className="button load__button">Load More </button>
      </div>
    </div>
  );
};

export default ComicsList;
