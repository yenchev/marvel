import "./comicsList.scss";

import Comics from "../comics/Comics";

const ComicsList = () => {
  return (
    <div>
      <div className="comics__list">
        <div className="row">
          <Comics />
          <Comics />
        </div>
        <div className="row">
          <Comics />
          <Comics />
        </div>
        <div className="row">
          <Comics />
          <Comics />
        </div>
        <div className="row">
          <Comics />
          <Comics />
        </div>
      </div>
      <div className="button__wrapper">
        <button className="button load__button">Load More </button>
      </div>
    </div>
  );
};

export default ComicsList;
