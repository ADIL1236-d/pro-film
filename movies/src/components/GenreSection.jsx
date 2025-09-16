import React, { useState, useEffect } from 'react'
import { useMovies } from '../contex/MoviesContext';
import { fetchMoviesByGenre } from '../servise/api';
import { getImageURl } from '../servise/api';

function GenreSection() {
  const {genres, loading, openMovieDetails} = useMovies();
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [genreMovies, setGenreMovies] = useState([]);
  const [loadingGenreMovies, seetLoadingGenreMovies] = useState([]);

  useEffect(()=>{
    if(!loading && genres.length > 0){
      setSelectedGenre(genres[0]);
    }
  },[loading, genres]);

  useEffect(()=>{
  const loadGenreMovies = async()=>{
    if(!selectedGenre) return;
    seetLoadingGenreMovies(true);
    const movies = await fetchMoviesByGenre(selectedGenre.id);
    setGenreMovies(movies.slice(0.8));
    seetLoadingGenreMovies(false);
  }
  loadGenreMovies();
  },[selectedGenre]);

   if (loading || !selectedGenre) {
    return (
        <section className='py-12 bg-neutral-900'>
          <div className='container mx-auto px-4'>
            <div className='h-64 flex items-center justify-center'>
              <div className='animate-pulse'>
                <div className='w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin'></div>
              </div>
            </div>
          </div>
        </section>
    );
   }

   const formatRating = (rating)=>{
    return (Math.round(rating * 10) / 10).toFixed(1);
  };

  return (
    <section className='py-12 bg-neutral-900/50' id=''>
      <div className='container mx-auto px-4'>
        <h2 className='text-2xl md:text-3xl font-bold text-white mb-6'>
          Browser by Genre
        </h2>

        {/* { genre tabs } */}
        <div className='mb-8 overflow-auto pb-2'>
          <div className='flex space-x-2 min-w-max'>
            {/* { conditional Rendring } */}
            {genres.slice(0, 10).map((gen) => {
            return ( 
             <button 
             className={`px-4 py-2 rounded-md transition-colors text-sm ${
              selectedGenre?.id === gen.id 
              ? "bg-purple-600 text-white" 
              : "bg-neutral-800 text-300 hover:bg-neutral-700"
            }`} onClick={()=> setSelectedGenre(gen)}
             key={gen.id}>
               {gen.name}
             </button>
             );
           })}
          </div>
        </div>

        {/* { conditional rendering } */}
        {loadingGenreMovies ? ( 
          <div className='h-64 flex items-center justify-center'>
          <div className='animate-pulse'>
            <div className='w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin'></div>
          </div>
        </div> 
      ) : ( 
      <div className='grid grid-cols-2 ms:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
          {/* { map method } */}
          {genreMovies.map((movie)=>{
            return (
            <div className='group cursor-pointer' key={movie.id}>
              <div className='relative rounded-lg overflow-hidden bg-neutral-800'>
                <div className='aspect-[2/3]'>
                  <img
                    src={getImageURl(movie.poster_path, "w500")}
                    alt={movie.title}
                    className='w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-35'
                  />
  
                  {/* overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4'>
  
                    {/* bottom content */}
                    <div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center space-x-1'>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.956.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className='text-yellow-400 text-xs font-medium'>
                           {formatRating(movie.vote_average)}
                          </span>
                        </div>
                        <span className='text-neutral-400 text-sm'>
                          {movie.release_date.substring(0,4) || "N/A"}
                        </span>
                      </div>
  
                      <button className='w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md flex items-center justify-center gap-1 transition-all text-sm'>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 10-16 0 8 8 0 0016 0zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-3'>
            <h3 className='text-white text-sm font-medium truncate'>
            { movie.title }
            </h3>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-1'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69L9.049 2.927z" />
                </svg>
                <span className='text-neutral-400 text-xs'>
                {formatRating(movie.vote_average)}
                </span>
              </div>
              <span className='text-neutral-500 text-xs'>
              {movie.release_date.substring(0,4) || "N/A"}
              </span>
            </div>
          </div>
            </div>

            
            );
          })}

          {/* movie title under card */}
         
        </div> 
      )}
       

        {/* { else } */}
      
      </div>
    </section>
  )
}

export default GenreSection
