import "./comicsInfo.scss";

import comicsImg from "../../img/comics.png";

import ComicsBanner from "../comicsBanner/ComicsBanner";

const ComicsInfo = () => {
  return (
    <div className="comics__info__page">
      <ComicsBanner />
      <div className="comics__info">
        <img src={comicsImg} alt="" className="comics__img" />
        <div className="comics__text">
          <div className="comics__name">X-Men: Days of Future Past</div>
          <div className="comics__description">
            Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops
            himself...and a demon for Christmas!?
          </div>
          <div className="comics__pages__num">144 pages</div>
          <div className="comics__lang">Language: en-us</div>
          <div className="comics__price">9.99$</div>
        </div>
        <button className="button back__button">Back to all</button>
      </div>
    </div>
  );
};

export default ComicsInfo;
