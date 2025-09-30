import React, { useEffect, useState } from 'react'
import { fetchMovieDetails, getMovieTrailer } from '../servise/api';
import { useMovies } from '../contex/MoviesContext';
import { useNavigate } from 'react-router-dom';
import SpecialPlayButton from './SpecialPlayButton';
import BookmarkButton from './BookmarkButton';
import styled from 'styled-components';

const OfficialWebsiteButton = () => {
  return (
    <StyledWrapper>
      <button className="container">
        <strong>OFFICIAL WEBSITE</strong>
        <div id="glow">
          <div className="circle" />
        </div>
        <div className="inner-container">
          <div className="fade" />
          <div className="up-text">
            <div className="crawl">
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
            </div>
          </div>
        </div>
      </button>
    </StyledWrapper>
  );
}

const ImdbButton = () => {
  return (
    <StyledWrapper>
      <button className="container">
        <strong>VIEW ON IMDB</strong>
        <div id="glow">
          <div className="circle" />
        </div>
        <div className="inner-container">
          <div className="fade" />
          <div className="up-text">
            <div className="crawl">
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
              <div className="grid-item" />
            </div>
          </div>
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    all: unset;
    height: 3.5rem;
    width: 14rem;
    position: relative;
    border-radius: 20px;
    border: double 3px transparent;
    transition: 50ms;
    background-image: linear-gradient(#212121, #212121),
      linear-gradient(0, #7e0474ff 0%, #fe53bb 25%, #8f51ea 87%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    cursor: pointer;
  }

  .container:hover > strong {
    transition: 300ms;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    filter: brightness(1.75);
    text-shadow: 2px 0 14px #fff;
  }

  .inner-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    border-radius: 18px;
  }

  strong,
  strong::before {
    transition: 300ms;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: absolute;
    font-size: 1.2rem;
    letter-spacing: 3px;
    z-index: 2;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-shadow: 2px 2px 8px rgba(56, 127, 224, 0.4),
      -2px -2px 8px rgba(254, 125, 255, 0.4);
    background-image: linear-gradient(
      0deg,
      rgba(255, 142, 224, 1) 0%,
      rgba(255, 29, 193, 1) 5%,
      rgba(198, 72, 255, 1) 30%,
      rgba(0, 0, 0, 1) 49%,
      rgba(255, 255, 255, 1) 52%,
      rgba(70, 148, 255, 1) 60%,
      rgba(21, 59, 112, 1) 69%
    );
  }

  strong::before {
    text-shadow: -6px -6px 6px #ff1372;
  }

  #glow {
    position: absolute;
    inset: 0;
    display: flex;
    width: 100%;
    height: 10rem;
    max-height: 3.5rem;
  }

  .circle {
    width: 100%;
    height: 100%;
    filter: blur(1.2rem);
    animation: pulse 2s infinite alternate;
    z-index: -1;
  }

  .circle:nth-of-type(1) {
    background: linear-gradient(0, #8f51ea 0%, #fe53bb 30%, #8f51ea 80%);
  }

  .fade {
    position: absolute;
    width: 100%;
    min-height: 10rem;
    top: -3rem;
    height: 10rem;
    background-image: linear-gradient(
      to top,
      rgba(175, 5, 155, 0.84) 15%,
      rgba(255, 31, 184, 0.36) 40%,
      rgb(43, 1, 54) 65%
    );
    z-index: 1;
  }

  .up-text {
    display: flex;
    justify-content: center;
    position: relative;
    height: 800px;
    font-weight: 600;
    letter-spacing: 6px;
    perspective: 400px;
    text-align: justify;
  }

  .crawl {
    display: grid;
    grid-template-columns: repeat(6, auto);
    position: relative;
    animation: crawl 20s linear infinite alternate;
  }

  .grid-item {
    width: 60px;
    height: 100%;
    border: 1px solid #be0b86ff;
    box-shadow: 0 0 10px 4px #b708a3ff;
  }

  @keyframes crawl {
    0% {
      top: -200px;
      transform: rotateX(30deg) translateZ(40px);
    }
    100% {
      top: -510px;
      transform: rotateX(25deg) translateZ(0px);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(0.9);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    }
  }`;

function MoviesDetails({ movieId, onClose }) {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [trailerUrl, setTrailerUrl] = useState(null);
    const [showTrailer, setShowTrailer] = useState(false);
    const { addToWatchlist, isInWatchlist } = useMovies();
    const navigate = useNavigate();

    useEffect(() => {
        async function getMoviesDetails() {
            try {
                setLoading(true);
                const movieData = await fetchMovieDetails(movieId);
                setMovie(movieData);
            } catch (err) {
                console.error("Failed to load movie details, please try again later");
                setError("Failed to load movie details, please try again later");
            } finally {
                setLoading(false);
            }
        }
        if (movieId) {
            getMoviesDetails();
        }
    }, [movieId]);

    if (!movieId) return null;

    const formatRuntime = (minutes) => {
        if (!minutes) return "N/A";
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours}h ${remainingMinutes}m`;
    };

    const formatRating = (rating) => {
        return (Math.round(rating * 10) / 10).toFixed(1);
    };

    const formatRevenue = (revenue) => {
        if (!revenue) return "N/A";
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            notation: "compact",
            maximumFractionDigits: 1,
        }).format(revenue);
    };

    const getImageUrl = (path, size = "original") => {
        const baseUrl = "https://image.tmdb.org/t/p/";
        return `${baseUrl}${size}${path}`;
    };

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/95 backdrop-blur-sm overflow-auto'>
            <div className='relative w-full max-w-5xl bg-neutral-800 rounded-lg shadow-xl max-h-[90vh] overflow-auto'>
                {/* close button */}
                <button
                    onClick={onClose}
                    className='absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-700/80 text-white hover:bg-neutral-600/80 transition-all'
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {loading ? (
                    <div className='flex items-center justify-center h-96'>
                        <div className='flex flex-col items-center'>
                            <div className='w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin'></div>
                            <p className='mt-4 text-white'>Loading Details...</p>
                        </div>
                    </div>
                ) : error ? (
                    <div className='flex items-center justify-center h-96'>
                        <div className='text-center'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-16 w-16 mx-auto text-red-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3l-5.467-9.45c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                            </svg>
                            <h2 className='text-xl font-bold mt-4'>
                                Failed to load details
                            </h2>
                            <p className='mt-2 text-neutral-400'>{error}</p>
                            <button
                                onClick={onClose}
                                className='mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md'
                            >
                                Close
                            </button>
                        </div>
                    </div>
                ) : movie ? (
                    <div>
                        {/* backdrop header */}
                        <div className='relative h-72 md:h-96 w-full'>
                            {movie.backdrop_path ? (
                                <img
                                    src={getImageUrl(movie.backdrop_path)}
                                    alt={movie.title}
                                    className='w-full h-full object-cover'
                                />
                            ) : (
                                <div className='w-full h-full bg-neutral-700'></div>
                            )}
                            {/* Gradient overlay */}
                            <div className='absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-800/70 to-transparent'></div>
                        </div>

                        <div
                            className='p-6 md:p-8'
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <div className='md:flex gap-8 -mt-32 md:-mt-48 relative'>
                                {/* Poster with Hover Like Button */}
                                <div className='w-32 md:w-64 flex-shrink-0 mb-4 md:mb-0'>
                                    <div className='rounded-lg overflow-hidden shadow-lg border border-neutral-700 relative group'>
                                        {movie.poster_path ? (
                                            <img
                                                src={getImageUrl(movie.poster_path, "w500")}
                                                alt={movie.title}
                                                className='w-full h-auto'
                                            />
                                        ) : (
                                            <div className='w-full aspect-[2/3] bg-neutral-700 flex items-center justify-center'>
                                                <span className='text-neutral-500'>
                                                    No Poster Available
                                                </span>
                                            </div>
                                        )}
                                        
                                        {/* Hover Overlay with Like Button */}
                                        <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (!movie) return;
                                                    if (!isInWatchlist(movie.id) && addToWatchlist) {
                                                        addToWatchlist(movie);
                                                    }
                                                }}
                                                className='flex items-center justify-center w-14 h-14 rounded-xl bg-transparent hover:scale-110 transition-transform duration-200 relative group/btn'
                                            >
                                                <svg 
                                                    className="w-8 h-8 transition-all duration-200 group-hover/btn:scale-110" 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    viewBox="0 0 17.503 15.625"
                                                >
                                                    <path 
                                                        className='transition-colors duration-200 group-hover/btn:fill-purple-400'
                                                        fill={isInWatchlist(movie.id) ? "rgb(177, 139, 189)" : "white"}
                                                        d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z"
                                                    />
                                                </svg>
                                                <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-sm opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200 whitespace-nowrap'>
                                                    {isInWatchlist(movie.id) ? "In Watchlist" : "Add to Watchlist"}
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Movies Info */}
                                <div className='flex-1'>
                                    <h1 className='text-3xl md:text-4xl font-bold text-white'>
                                        {movie.title}
                                        {movie.release_date && (
                                            <span className='text-neutral-400 font-normal ml-2'>
                                                ({movie.release_date.substring(0, 4)})
                                            </span>
                                        )}
                                    </h1>

                                    {/* Rating and Other meta */}
                                    <div className='flex flex-wrap gap-x-4 gap-y-2 mt-3 text-sm items-center'>
                                        {movie.vote_average > 0 && (
                                            <div className='flex items-center'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-yellow-500"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.959.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <span className='ml-1 font-medium'>
                                                    {formatRating(movie.vote_average)}
                                                </span>
                                            </div>
                                        )}
                                        {movie.runtime > 0 && (
                                            <span className='text-neutral-300'>
                                                {formatRuntime(movie.runtime)}
                                            </span>
                                        )}
                                        {movie.release_date && (
                                            <span className='text-neutral-300'>
                                                {movie.release_date}
                                            </span>
                                        )}
                                        {movie.adult && (
                                            <span className='bg-red-500/80 text-white text-xs px-2 py-0.5 rounded'>
                                                +18
                                            </span>
                                        )}
                                    </div>

                                    {/* genres */}
                                    {movie.genres && movie.genres.length > 0 && (
                                        <div className='mt-4 flex flex-wrap gap-2'>
                                            {movie.genres.map((genre) => (
                                                <span
                                                    key={genre.id}
                                                    className='bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-sm'
                                                >
                                                    {genre.name}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Tagline */}
                                    {movie.tagline && (
                                        <p className='mt-4 text-neutral-400 italic'>
                                            "{movie.tagline}"
                                        </p>
                                    )}

                                    {/* overview */}
                                    <div className='mt-6'>
                                        <h2 className='text-xl font-semibold text-white mb-2'>
                                            Overview
                                        </h2>
                                        <p className='text-neutral-300'>
                                            {movie.overview || "No overview available."}
                                        </p>
                                    </div>

                                    {/* buttons */}
                                    <div className='mt-8 flex flex-wrap items-center gap-4'>
                                        <div
                                            onClick={async () => {
                                                const trailer = await getMovieTrailer(movieId);
                                                if (trailer) {
                                                    setTrailerUrl(trailer);
                                                    setShowTrailer(true);
                                                } else {
                                                    alert('No trailer available for this movie');
                                                }
                                            }}
                                        >
                                            <SpecialPlayButton />
                                        </div>

                                        <div
                                            onClick={() => {
                                                if (!movie) return;
                                                if (!isInWatchlist(movie.id) && addToWatchlist) {
                                                    addToWatchlist(movie);
                                                }

                                                onClose();
                                                setTimeout(() => {
                                                    navigate('/watchlist');
                                                }, 100);
                                            }}
                                        >
                                            <BookmarkButton />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Details */}
                            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
                                <div>
                                    <h2 className='text-xl font-semibold text-white mb-4'>
                                        Details
                                    </h2>
                                    <div className='space-y-4'>
                                        {movie.production_companies &&
                                            movie.production_companies.length > 0 && (
                                                <div>
                                                    <h3 className='text-neutral-400 text-sm mb-1'>
                                                        Production Companies
                                                    </h3>
                                                    <p className='text-white'>
                                                        {movie.production_companies
                                                            .map((company) => company.name)
                                                            .join(", ")}
                                                    </p>
                                                </div>
                                            )}

                                        {movie.production_countries &&
                                            movie.production_countries.length > 0 && (
                                                <div>
                                                    <h3 className='text-neutral-400 text-sm mb-1'>
                                                        Production Countries
                                                    </h3>
                                                    <p className='text-white'>
                                                        {movie.production_countries
                                                            .map((country) => country.name)
                                                            .join(", ")}
                                                    </p>
                                                </div>
                                            )}

                                        {movie.spoken_languages &&
                                            movie.spoken_languages.length > 0 && (
                                                <div>
                                                    <h3 className='text-neutral-400 text-sm mb-1'>
                                                        Languages
                                                    </h3>
                                                    <p className='text-white'>
                                                        {movie.spoken_languages
                                                            .map((language) => language.english_name)
                                                            .join(", ")}
                                                    </p>
                                                </div>
                                            )}

                                        {movie.budget > 0 && (
                                            <div>
                                                <h3 className='text-neutral-400 text-sm mb-1'>
                                                    Budget
                                                </h3>
                                                <p className='text-white'>
                                                    {formatRevenue(movie.budget)}
                                                </p>
                                            </div>
                                        )}

                                        {movie.revenue > 0 && (
                                            <div>
                                                <h3 className='text-neutral-400 text-sm mb-1'>
                                                    Revenue
                                                </h3>
                                                <p className='text-white'>
                                                    {formatRevenue(movie.revenue)}
                                                </p>
                                            </div>
                                        )}

                                        {movie.status && (
                                            <div>
                                                <h3 className='text-neutral-400 text-sm mb-1'>
                                                    Status
                                                </h3>
                                                <p className='text-white'>{movie.status}</p>
                                            </div>
                                        )}

                                        {movie.original_language && (
                                            <div>
                                                <h3 className='text-neutral-400 text-sm mb-1'>
                                                    Original Language
                                                </h3>
                                                <p className='text-white'>
                                                    {movie.original_language.toUpperCase()}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Right column - Rating */}
                                <div>
                                    <h2 className='text-xl font-semibold text-white mb-4'>
                                        Rating
                                    </h2>
                                    {movie.vote_average > 0 ? (
                                        <div className='flex items-center'>
                                            <div className='w-24 h-24 rounded-full border-4 border-purple-500 flex items-center justify-center mr-4'>
                                                <span className='text-3xl font-bold'>
                                                    {formatRating(movie.vote_average)}
                                                </span>
                                            </div>
                                            <div>
                                                <p className='text-neutral-300'>
                                                    From {movie.vote_count.toLocaleString()} votes
                                                </p>
                                                <div className='w-full bg-neutral-700 rounded-full h-2.5 mt-2'>
                                                    <div
                                                        className='bg-purple-600 h-2.5 rounded-full'
                                                        style={{
                                                            width: `${(movie.vote_average / 10) * 100}%`,
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <p className='text-neutral-400'>No rating available</p>
                                    )}

                                    {/* IMDB and homepage link */}
                                    <div className='mt-8 space-y-4'>
                                        {movie.homepage && (
                                            <a
                                                href={movie.homepage}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='inline-block'
                                            >
                                                <OfficialWebsiteButton />
                                            </a>
                                        )}

                                        {movie.imdb_id && (
                                            <a
                                                href={`https://www.imdb.com/title/${movie.imdb_id}`}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='inline-block'
                                            >
                                                <ImdbButton />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            ) : null}
            </div>

            {/* Trailer Modal */}
            {showTrailer && trailerUrl && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90">
                    <div className="relative w-full max-w-4xl aspect-video">
                        <button
                            onClick={() => {
                                setShowTrailer(false);
                                setTrailerUrl(null);
                            }}
                            className="absolute -top-10 right-0 p-2 text-white hover:text-gray-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <iframe
                            src={trailerUrl}
                            className="w-full h-full"
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>           
    );
}

export default MoviesDetails;