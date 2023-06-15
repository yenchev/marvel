import "./characterInfo.scss";

import charImg from "../../img/character.jpg";

const CharacterInfo = () => {
  const items = [
    "All-Winners Squad: Band of Heroes (2011) #3",
    "Alpha Flight (1983) #50",
    "Amazing Spider-Man (1999) #503",
    "Amazing Spider-Man (1999) #504",
    "AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)",
    "Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)",
    "Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)",
    "Vengeance (2011) #4",
    "Avengers (1963) #1",
    "Avengers (1996) #1",
  ];
  return (
    <div className="wrapper">
      {" "}
      <div className="character__info">
        <div className="character__info__main">
          <img src={charImg} alt="Character" />
          <div className="character__name">THOR</div>
          <div className="buttons">
            <button className="button home-button">HOMEPAGE</button>
            <button className="button wiki-button">WIKI</button>
          </div>
        </div>
        <div className="character__descr">
          In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi
          and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
        </div>
        <div className="character__comics">
          {" "}
          <ul>
            <h2>Comics:</h2>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
