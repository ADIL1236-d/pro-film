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
    const [watchlist, setWatchlist] = useState(() => {
        try {
            const raw = localStorage.getItem("watchlist");
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    });

    useEffect(()=>{
        const fetchMovieData = async()=>{
            try {  
                setLoading(true);
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

    // persist watchlist
    useEffect(() => {
        try {
            localStorage.setItem("watchlist", JSON.stringify(watchlist));
        } catch {}
    }, [watchlist]);

    const openMovieDetails = (movieId)=>{
        setSelectedMovieId(movieId);
        document.body.style.overflow = "hidden";
    };

    const closeMovieDetails = () => {
        setSelectedMovieId(null);
        document.body.style.overflow = "";
    };

    const addToWatchlist = (movie) => {
        if (!movie || !movie.id) return;
        setWatchlist((prev) => {
            if (prev.some((m) => m.id === movie.id)) return prev;
            // store minimal fields
            const item = {
                id: movie.id,
                title: movie.title || movie.name || "Untitled",
                poster_path: movie.poster_path || null,
                release_date: movie.release_date || movie.first_air_date || null,
                vote_average: movie.vote_average || 0,
            };
            return [item, ...prev];
        });
    };

    const removeFromWatchlist = (id) => {
        setWatchlist((prev) => prev.filter((m) => m.id !== id));
    };

    const isInWatchlist = (id) => watchlist.some((m) => m.id === id);

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
        closeMovieDetails,
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
        isInWatchlist
    }}
    >
        {children}
    </MoviesContext.Provider >
    )
};