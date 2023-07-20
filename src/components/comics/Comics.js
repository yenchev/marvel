import React from "react";
import "./comics.scss";
const Comics = ({ comImg, comName, comPrice }) => {
  const truncatedName = comName.length > 25 ? comName.substring(0, 25) + "..." : comName;
  const priceText = comPrice === 0 ? "NOT AVAILABLE" : `${comPrice}$`;
  return (
    <div className="comics">
      <img src={comImg} alt="Comics" className="comics__image" />
      <div className="comics__name__wrapp">
        <div className="comics__name">{truncatedName}</div>
        <div className="comics__price">{priceText}</div>
      </div>
    </div>
  );
};
export default Comics;
