import React from 'react';
import { useMovies } from '../contex/MoviesContext';

function WatchList() {
  const { watchlist, removeFromWatchlist, openMovieDetails } = useMovies();

  if (!watchlist || watchlist.length === 0) {
    return (
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h1 className='text-2xl md:text-3xl font-bold mb-6'>My Watchlist</h1>
          <p className='text-neutral-400'>Your watchlist is empty. Add movies from any details page.</p>
        </div>
      </section>
    );
  }

  const getImageUrl = (path, size = "w342") => {
    if (!path) return '/placeholder-image.jpg';
    return `https://image.tmdb.org/t/p/${size}${path}`;
  };

  return (
    <section className='py-16'>
      <div className='container mx-auto px-4'>
        <h1 className='text-2xl md:text-3xl font-bold mb-6'>My Watchlist</h1>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6'>
          {watchlist.map((movie) => (
            <div key={movie.id} className='group relative rounded-lg overflow-hidden bg-neutral-800'>
              <div className='aspect-[2/3] cursor-pointer' onClick={() => openMovieDetails(movie.id)}>
                <img
                  src={getImageUrl(movie.poster_path, 'w500')}
                  alt={movie.title}
                  className='w-full h-full object-cover transition-all duration-300 group-hover:scale-105'
                />
              </div>
              <div className='p-3'>
                <h3 className='text-sm text-white font-medium truncate'>{movie.title}</h3>
                <div className='flex items-center justify-between mt-2 text-xs text-neutral-400'>
                  <span>{movie.release_date?.substring(0, 4) || 'N/A'}</span>
                  <span>⭐ {Number(movie.vote_average || 0).toFixed(1)}</span>
                </div>
                <button
                  onClick={() => removeFromWatchlist(movie.id)}
                  className='mt-3 w-full bg-neutral-700 hover:bg-neutral-600 text-white py-2 rounded text-sm transition-colors'
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WatchList;
