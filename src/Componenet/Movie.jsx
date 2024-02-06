import React, {memo} from 'react';
import './Movie.css'
import {Link} from "react-router-dom";

const Movie = memo(({title, year, summary, poster, genres}) => {
    return (
        <Link to='/movie-detail' state={{title, year, summary, poster,genres}} >
            <div className="movie">
                <img src={poster} alt={title} title={title}/>
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genres, index) => {
                            return <li key={index} className="movie__genres">{genres}</li>
                        })}
                    </ul>

                    <p className="movie__summary">{summary.slice(0, 180)}</p>

                </div>
            </div>
        </Link>
    );
});

export default Movie;