import React, { useState, useEffect } from 'react'
import { useMovies } from '../contex/MoviesContext';
import { fetchMoviesByGenre } from '../servise/api';
import JoinButton from './JoinButton';

function GenreSection() {
  const {genres, loading, openMovieDetails} = useMovies();
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [genreMovies, setGenreMovies] = useState([]);
  const [loadingGenreMovies, setLoadingGenreMovies] = useState(false);

  useEffect(() => {
    if (!loading && genres.length > 0) {
      setSelectedGenre(genres[0]);
    }
  }, [loading, genres]);

  useEffect(() => {
    const loadGenreMovies = async () => {
      if (!selectedGenre) return;
      
      setLoadingGenreMovies(true);
      try {
        const movies = await fetchMoviesByGenre(selectedGenre.id);
        setGenreMovies(movies.slice(0, 8));
      } catch (error) {
        console.error('Error loading genre movies:', error);
        setGenreMovies([]);
      } finally {
        setLoadingGenreMovies(false);
      }
    };
    
    loadGenreMovies();
  }, [selectedGenre]);

  // دالة التحميل
  const LoadingSpinner = () => (
    <div className='h-64 flex items-center justify-center'>
      <div className='animate-pulse'>
        <div className='w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin'></div>
      </div>
    </div>
  );

  if (loading || !selectedGenre) {
    return (
      <section className='py-12 bg-neutral-900'>
        <div className='container mx-auto px-4'>
          <LoadingSpinner />
        </div>
      </section>
    );
  }

  const formatRating = (rating) => {
    return (Math.round(rating * 10) / 10).toFixed(1);
  };

  const getImageUrl = (path, size = "original") => {
    if (!path) return '/placeholder-image.jpg';
    const baseUrl = "https://image.tmdb.org/t/p/";
    return `${baseUrl}${size}${path}`;
  };

  // مكون البطاقة منفصل للتنظيم
  const MovieCard = ({ movie }) => (
    <div 
      key={movie.id}
      className='group cursor-pointer' 
      onClick={() => openMovieDetails(movie.id)}
    >
      <div className='relative rounded-lg overflow-hidden bg-neutral-800'>
        <div className='aspect-[2/3]'>
          <img
            src={getImageUrl(movie.poster_path, "w500")}
            alt={movie.title}
            className='w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-75'
            onError={(e) => {
              e.target.src = '/placeholder-image.jpg'; // صورة بديلة عند فشل التحميل
            }}
          />

          {/* overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4'>
            <div>
              <div className='flex items-center justify-between mb-3'>
                <div className='flex items-center space-x-1'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L9.049 2.927z" />
                  </svg>
                  <span className='text-yellow-400 text-xs font-medium'>
                    {formatRating(movie.vote_average)}
                  </span>
                </div>
                <span className='text-neutral-400 text-sm'>
                  {movie.release_date?.substring(0, 4) || "N/A"}
                </span>
              </div>

              <div className='flex justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 mt-3'>
                <JoinButton onClick={() => openMovieDetails(movie.id)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* movie title under card */}
      <div className='mt-3'>
        <h3 className='text-white text-sm font-medium truncate'>
          {movie.title}
        </h3>
        <div className='flex items-center justify-between mt-1'>
          <div className='flex items-center space-x-1'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L9.049 2.927z" />
            </svg>
            <span className='text-neutral-400 text-xs'>
              {formatRating(movie.vote_average)}
            </span>
          </div>
          <span className='text-neutral-500 text-xs'>
            {movie.release_date?.substring(0, 4) || "N/A"}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section className='py-12 bg-neutral-900/50' id='genres'>
      <div className='container mx-auto px-4'>
        <h2 
          className='text-2xl md:text-3xl font-bold text-white mb-6'
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          Browse by Genre
        </h2>

        {/* genre tabs */}
        <div className='mb-8 overflow-auto pb-2'>
          <div className='flex space-x-2 min-w-max'>
            {genres.slice(0, 10).map((genre, idx) => (
              <button 
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={idx * 100}
                className={`px-4 py-2 rounded-md transition-colors text-sm whitespace-nowrap ${
                  selectedGenre?.id === genre.id 
                    ? "bg-purple-600 text-white" 
                    : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                }`} 
                onClick={() => setSelectedGenre(genre)}
                key={genre.id}
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>

        {/* Movies Grid */}
        {loadingGenreMovies ? (
          <LoadingSpinner />
        ) : genreMovies.length > 0 ? (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6' data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="100" >
            {genreMovies.map((movie, index) => {
              const columnIndex = index % 4; // align with lg:grid-cols-4
              const aos = columnIndex < 2 ? 'fade-right' : 'fade-left';
              return (
                <div
                  key={movie.id}
                  data-aos={aos}
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  <MovieCard movie={movie} />
                </div>
              );
            })}
          </div>
        ) : (
          // حالة عدم وجود أفلام
          <div className='text-center py-12'>
            <p className='text-neutral-400 text-lg'>
              No movies found for this genre
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default GenreSection;