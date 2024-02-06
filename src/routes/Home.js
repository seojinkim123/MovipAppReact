import {useEffect, useState} from "react";
import axios from "axios";
import Movie from "../Componenet/Movie";
import './Home.css';


const Home=()=>{

    const [isLoading,setIsLoading]=useState(true)
    const [movies,setMovies]=useState()


    const getMovies=async ()=>{
        const movies=await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
        setMovies(movies.data.data.movies);
        setIsLoading(false)
    }



    useEffect(()=>{
        getMovies();

    },[])

    console.log(movies)

    return (
        <section className="container">
            {isLoading? (
                <div className="loader">
                    <span className="loader__text">'Loading...'</span>
                </div>
            ):(
                <div className="movies">
                    {movies.map( movie =>
                        <Movie
                            id={movie.id} year={movie.year} title={movie.title}
                            summary={movie.summary} poster={movie.medium_cover_image}
                            key={movie.id} genres={movie.genres}
                        />
                    )
                    }
                </div>
            )

            }
        </section>

    );
}

export default Home;
