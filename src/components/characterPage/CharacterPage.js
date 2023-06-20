import "./characterPage.scss";

import charImg from "../../img/character.jpg";

import ComicsBanner from "../comicsBanner/ComicsBanner";

const CharacterPage = () => {
  return (
    <div className="char__page">
      <ComicsBanner />
      <div className="char__info">
        <img src={charImg} alt="" className="char__img" />
        <div className="char__text">
          <div className="char__name">LOKI</div>
          <div className="char__description">
            In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
            Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
