import React, { useState, useEffect, useMemo } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import useResize from "../../../hooks/useResize";

import classes from "./MoviesCardList.module.css";

const MoviesCardList = ({ movies }) => {

  const screenSize = useResize();
  const [moviesToAdd, setMoviesToAdd] = useState(0);

  useEffect(() => {
    setMoviesToAdd(0);
  }, []);

  const moviesToRender = useMemo(() => {
    const countToRender = screenSize.width < 768 ? 4 : screenSize.width < 1280 ? 8 : 12;
    return movies.slice(0, countToRender + moviesToAdd);
  }, [movies, moviesToAdd, screenSize]);

  return (
    <div className={`${classes.wrapper} content`}>
      <ul className={classes.list}>
        {
          moviesToRender.map((movie, index) =>
            <li key={index} className={classes.list__item}>
              <MoviesCard
                title={movie.title}
                duration={movie.duration}
                image={movie.image}
              />
            </li>)
        }
      </ul>
      <div className={classes.more}>
        {
          movies.length > moviesToRender.length && (
            <button className={classes.more__button} onClick={() => setMoviesToAdd((prev) => prev + (screenSize.width >= 1280 ? 3 : 2))}>Ещё</button>
          )
        }
      </div>
    </div>
  )
};

export default MoviesCardList;
