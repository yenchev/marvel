import React, { useState } from "react";
import "./comicsPage.scss";
import ComicsList from "../comicsList/ComicsList";
import ComicsInfo from "../comicsInfo/ComicsInfo";
const ComicsPage = ({ comics }) => {
  const [selectedComic, setSelectedComic] = useState(null);
  const handleComicClick = (comic) => {
    setSelectedComic(comic);
  };

  const handleBackButtonClick = () => {
    setSelectedComic(false);
  };
  return <div className="comics__page">{selectedComic ? <ComicsInfo comic={selectedComic} onBackButtonClick={handleBackButtonClick} /> : <ComicsList comics={comics} onComicClick={handleComicClick} />}</div>;
};
export default ComicsPage;
