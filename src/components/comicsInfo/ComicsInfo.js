import React from "react";
import ComicsBanner from "../comicsBanner/ComicsBanner";
import "./comicsInfo.scss";
const ComicsInfo = ({ comic, onBackButtonClick }) => {
  const description = comic.description && comic.description.length > 4 ? comic.description : "This comic does not have a description.";
  const thumbnail = comic.thumbnail && comic.thumbnail.path ? comic.thumbnail.path + "." + comic.thumbnail.extension : "";
  const price = comic.prices && comic.prices.length > 0 ? comic.prices[0].price : 0;
  const formattedPrice = price !== 0 ? `${price}$` : "Not available now";
  return (
    <div className="comics__info__page">
      <ComicsBanner />
      <button className="comics__back__button" onClick={onBackButtonClick}>
        Back to all
      </button>
      <div className="comics__info">
        {thumbnail && <img src={thumbnail} alt="" className="comics__img" />}
        <div className="comics__text">
          <div className="tittle">
            <div className="comics__name">{comic.title}</div>
          </div>
          <div className="comics__description">{description}</div>
          <div className="comics__pages__num">{comic.pageCount} pages</div>
          <div className="comics__lang">Language: en-us</div>
          <div className="comics__price">{formattedPrice}</div>
        </div>
      </div>
    </div>
  );
};
export default ComicsInfo;
