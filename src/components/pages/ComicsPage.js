import "./comicsPage.scss";

import ComicsBanner from "../comicsBanner/ComicsBanner";
import ComicsList from "../comicsList/ComicsList";

const ComicsPage = () => {
  return (
    <div className="comics__page ">
      <ComicsBanner />
      <ComicsList />
    </div>
  );
};

export default ComicsPage;
