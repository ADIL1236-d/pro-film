import { createContext, useContext, useEffect, useState } from "react";
import { 
    fetchGenres, 
    fetchPopularMovies, 
    fetchTopRatedMovies, 
    fetchTrendingMovies 
} from "../servise/api";

const MoviesContext = createContext();
export const useMovies = () => useContext(MoviesContext);

export const MoviesProvider = ({ children }) =>{
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedMovieId, setSelectedMovieId] = useState(null);

    useEffect(()=>{
        const fetchMovieData = async()=>{
            try {  
                // setLoading(true);
                const [trending, popular, topRated, genreList] = await Promise.all([
                    fetchTrendingMovies(),
                    fetchPopularMovies(),
                    fetchTopRatedMovies(),
                    fetchGenres(),
                ]); 

                setTrendingMovies(trending);
                setPopularMovies(popular);
                setTopRatedMovies(topRated);
                setGenres(genreList);
            } catch (err) {  
                console.log("Error fetching movie data", err);  
            } finally {
                setLoading(false);
            }
        };
        fetchMovieData();
    },[]);

    const openMovieDetails = (movieId)=>{
        setSelectedMovieId(movieId);
        document.body.style.overflow = "hidden";
    };

    const closeMovieDetails = () => {
        setSelectedMovieId(null);
        document.body.style.overflow = "";
    };

    return (
    <MoviesContext.Provider 
    value={{
        trendingMovies, 
        popularMovies, 
        topRatedMovies, 
        genres, 
        loading, 
        error, 
        selectedMovieId, 
        openMovieDetails, 
        closeMovieDetails
    }}
    >
        {children}
    </MoviesContext.Provider >
    )
};