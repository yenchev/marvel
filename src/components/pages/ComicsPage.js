import "./comicsPage.scss";

import ComicsBanner from "../comicsBanner/ComicsBanner";
import ComicsList from "../comicsList/ComicsList";
import ComicsInfo from "../comicsInfo/ComicsInfo";

const ComicsPage = () => {
  return (
    <div className="comics__page ">
      <ComicsBanner />
      <ComicsList />
      {/* <ComicsInfo /> */}
    </div>
  );
};

export default ComicsPage;
