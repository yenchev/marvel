import "./mainPage.scss";
import RandomCharacter from "../randomCharacter/RandomCharacter";
import Characters from "../characters/Characters";
import CharacterPage from "../characterPage/CharacterPage";
import bgImg from "../../img/bg down.png";

const MainPage = () => {
  return (
    <div className="main__page fade-in-text">
      <RandomCharacter />
      <Characters />
      {/* <CharacterPage /> */}
      <img className="bg__Img" src={bgImg} alt="bgImg" />
    </div>
  );
};

export default MainPage;
