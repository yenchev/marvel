import React, { useState, useEffect } from "react";
import "./comicsList.scss";
import Comics from "../comics/Comics";
import ComicsBanner from "../comicsBanner/ComicsBanner";
const ComicsList = ({ comics, onComicClick }) => {
  const [visibleComics, setVisibleComics] = useState(10);
  const [shuffledComics, setShuffledComics] = useState([]);
  useEffect(() => {
    const shuffleComics = () => {
      const shuffledComics = comics.sort(() => Math.random() - 0.5);
      setShuffledComics(shuffledComics);
    };
    shuffleComics();
  }, [comics]);
  const handleLoadMore = () => {
    setVisibleComics((prevCount) => prevCount + 10);
  };
  const handleComicClick = (comic) => {
    onComicClick(comic);
  };
  return (
    <div className="comics__list__wrapper">
      <ComicsBanner />
      {shuffledComics.length === 0 ? (
        <div className="loading__overlay"></div>
      ) : (
        <div className="comics__list">
          {shuffledComics.slice(0, visibleComics).map((comic) => (
            <div className="row" key={comic.id} onClick={() => handleComicClick(comic)}>
              <Comics comImg={comic.thumbnail.path + "." + comic.thumbnail.extension} comName={comic.title} comPrice={comic.prices[0].price} pageCount={comic.pageCount} />
            </div>
          ))}
        </div>
      )}
      {visibleComics < comics.length && (
        <div className="button__wrapper">
          <button className="button load__button" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
export default ComicsList;
