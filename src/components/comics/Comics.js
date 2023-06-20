import "./comics.scss";
import comicsImg from "../../img/comics.png";

const Comics = () => {
  return (
    <>
      <div className="comics">
        <img src={comicsImg} alt="Comics" className="comics__image" />
        <div className="comics__name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
        <div className="comics__price">9.99$</div>
      </div>
    </>
  );
};

export default Comics;
