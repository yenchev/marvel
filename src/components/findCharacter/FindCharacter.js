import "./findCharacter.scss";

const FindCharacter = () => {
  return (
    <div className="find__char">
      <form className="find__char__form">
        <h2 className="form__tittle">Or find a character by name:</h2>
        <input type="text" className="find__char__input" placeholder="Enter name" />
        <button type="submit" className=" button find__char__button">
          Find
        </button>
      </form>
    </div>
  );
};

export default FindCharacter;
