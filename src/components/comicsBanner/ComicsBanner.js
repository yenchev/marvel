import "./comicsBanner.scss";

import avengers from "../../img/Avengers.png";
import logo from "../../img/Avengers logo.png";

const ComicsBanner = () => {
  return (
    <div className="baner__wrapper">
      <div className="comics__banner ">
        <img src={avengers} alt="avengers" className="left__banner_img" />
        <div className="banner__tittle">
          New comics every week! <br></br> Stay tuned!
        </div>
        <img src={logo} alt="avenges__logo" className="right__banner_img" />
      </div>
    </div>
  );
};

export default ComicsBanner;
