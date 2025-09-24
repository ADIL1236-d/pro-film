import React, { useEffect, useState } from 'react'
import { useMovies } from '../contex/MoviesContext';
import { getImageUrl } from '../servise/api';

function HeroSection() {
  const {trendingMovies, loading} = useMovies();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); 
  
  const featuredMovies = trendingMovies.slice(0, 5);

  useEffect(() => {
    if(loading || featuredMovies.length === 0) return;
    
    const interval = setInterval(() => {
       setIsTransitioning(true);
       setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredMovies.length); 
        setIsTransitioning(false);
       }, 500);
    }, 8000);

    return () => clearInterval(interval); 
  }, [loading, featuredMovies.length]);

   if (loading || featuredMovies.length === 0) {
    return (
      <div className="relative w-full h-screen flex items-center justify-center bg-neutral-900">
        <div className='animate-pulse flex flex-col items-center'>
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <p className='mt-4 text-neutral-400'>Loading movies...</p>
        </div>
      </div>
    );
   }

   const currentMovie = featuredMovies[currentSlide];
   
   const formatRating = (rating) => {
    return (Math.round(rating * 10) / 10).toFixed(1);
  };
  
  return (
    <div className='relative w-full h-screen'>
      {/* movies backdrop */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-neutral-900 transition-all duration-700 ${
          isTransitioning ? "opacity-0" : "opacity-100" 
        }`} 
        style={{
          backgroundImage: `url(${getImageUrl(currentMovie.backdrop_path)})`, 
        }}
      >
        {/* gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-neutral-900/20' />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/50' />
      </div>

      {/* content */}
      <div className='absolute inset-0 flex items-center z-10 container mx-auto px-4'>
        <div className='max-w-3xl'>
          {/* movies info */}
          <div className={`transition-all duration-700 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
            <div className='flex items-center space-x-3 mb-4'>
              <span 
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="100"
                className='bg-purple-500/90 text-white text-xs font-semibold px-2 py-1 rounded-sm'>
                FEATURED
              </span>
              
              {/* rating */}
              {currentMovie.vote_average > 0 && ( 
                <div 
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-anchor-placement="bottom-center" 
                className='flex items-center space-x-1'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                  <span className='text-yellow-400 text-sm font-medium'>
                    {formatRating(currentMovie.vote_average)}
                  </span>
                </div>
              )}
              
              <span 
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="300"
                className='text-neutral-400'>•</span>
              <span 
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="400"
                className='text-neutral-300 text-sm'>
                {currentMovie.release_date?.substring(0, 4) || "N/A"}
              </span>
              
              {/* adult rating */}
              {currentMovie.adult && ( 
                <>
                  <span 
                    data-aos="fade-down"
                    data-aos-duration="800"
                    data-aos-delay="500"
                    className='text-neutral-400'>•</span>
                  <span 
                    data-aos="fade-down"
                    data-aos-duration="800"
                    data-aos-delay="600"
                    className='bg-red-600 text-white text-xs px-2 py-0.5 rounded'>
                    18+
                  </span>
                </>
              )}
            </div>

            <h1 
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className='text-4xl md:text-6xl font-bold text-white mb-4 leading-tight'>
              {currentMovie.title}
            </h1>
            
            <p 
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              className='text-neutral-300 text-base md:text-lg mb-8 line-clamp-3 max-w-2xl'>
              {currentMovie.overview}
            </p>
            
            <div className='flex flex-wrap gap-4'>
            <button 
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="600"
              className="relative z-10 text-white bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-3 rounded-lg flex items-center gap-2 font-semibold tracking-wide uppercase text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor" 
      viewBox="0 0 24 24" 
      className="w-5 h-5"
    >
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2-6l6-4-6-4v8z"/>
    </svg>
    Watch Now
  </button>

  {/* Glow & Waves - Transparent & Light */}
  <svg
    className="absolute top-0 left-0 w-full h-full pointer-events-none scale-105 opacity-20 animate-pulse"
    viewBox="0 0 2400 800"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="purple-grad-light" y2="100%" x2="50%" y1="0%" x1="50%">
        <stop offset="0%" stop-opacity="0.3" stop-color="hsl(275, 80%, 60%)" />
        <stop offset="100%" stop-opacity="0.2" stop-color="hsl(230, 70%, 50%)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#purple-grad-light)"
      d="M0,305 Q227,450 600,302 Q1010,450 1200,343 Q1379,450 1800,320 Q2153,450 2400,314 L2400,800 L0,800 Z"
    />
  </svg>
              
              <button 
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="800"
                className='bg-neutral-800/80 hover:bg-neutral-700/80 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all border border-neutral-600 hover:scale-105'
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v8"></path>
                  <path d="M8 12h8"></path>
                </svg>
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </div> 
      
      {/* pagination */}
      <div className='absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10'> 
        {featuredMovies.map((_, index) => (
          <button 
            key={index} 
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentSlide(index);
                setIsTransitioning(false);
              }, 500);
            }}
            className={`h-1.5 rounded-full transition-all ${
              currentSlide === index 
                ? "w-8 bg-purple-500" 
                : "w-4 bg-neutral-600/50 hover:bg-neutral-600/70"
            }`}
          />
        ))}
      </div>
    </div>
  ); 
}

export default HeroSection;