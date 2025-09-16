import React, { useEffect, useState } from 'react'
import { useMovies } from '../contex/MoviesContext';
import { getImageURl } from '../servise/api';

function HeroSection() {
  const {trendingMovies, loading} = useMovies();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransittioning, setIsTransittioning] = useState(false);
  
  const featuredMovies = trendingMovies.slice(0,5);

  useEffect(()=>{
    if(loading || featuredMovies.length === 0) return;
    
    const interval = setInterval(() => {
       setIsTransittioning(true);
       setTimeout(() => {
        setCurrentSlide((prev)=> (prev + 1) & featuredMovies.length)
        setIsTransittioning(false);
       }, 500);
    }, 8000);

    return () => clearInterval();
  }, [loading, featuredMovies.length])

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
  const formatRating = (rating)=>{
    return (Math.round(rating * 10) /10).toFixed(1);
  };
  
  return (
  <div className='relative w-full h-screen'>
    {/* { movies backdrop } */}
    <div 
    className={`absolute inset-0 bg-cover bg-center bg-neutral-900 transition-all duration-700 ${
      isTransittioning ? "opacity-0 ": "opacity-100" 
      }`} style={{backgroundImage: `url(${getImageURl(currentMovie.backdrop_path)})`,
      }}
    >
        {/* { gradient overlay} */}
        <div className='absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900 via-neutral-900/70 to-neutral-900/20' />
        <div className='absolute inset-0 bg-gradient-to-r from-neutral-900 to-transparent'/>
    </div>

    {/* { content} */}
    <div className='absolute inset-0 flex items-center z-10 container mx-auto px-4'>
    <div className='max-w-3xl'>
        {/* { movies info } */}
        <div className={`transition-all duration-700 ${isTransittioning ? "opacity-0": "opacity-100"}`}>
            <div className='flex items-center space-x-3 mb-4'>
                <span className='bg-purple-500/90 text-white text-xs font-semibold py-1 rounded-sm'>
                FEATURED
                </span>
                {/* { conditional renderign } */}
               {currentMovie.vote_average > 0 && ( 
               <div className='flex items-center'>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.811l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.011l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <span>{formatRating(currentMovie.vote_average)}</span>
                </div>
                )}
                {/* { conditional rendering close} */}
                <span className='text-neutral-400'>.</span>
                <span className='text-neutral-300 text-sm'>
                   {currentMovie.release_date?.substring(0,4) || "N/A"}
                </span>
                { /* { conditional rendering } */ }
                
               {currentMovie.adult && ( 
               <> 
               <span className='text-neutral-400'>.</span>
                <span className='text-neutral-700 text-neutral-300 bg-gray-600 px-11.5 py-0.'>
                    18+
                </span>
                </>
               )}
                
                { /* { conditional rendering close} */ }
            </div>

            <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
            {currentMovie.title}
            </h1>
            <p className='text-neutral-300 text-base md:text-lg mb-8 line-clamp-3'>
                {currentMovie.overview}
            </p>
            <div className='flex flex-wrap gap-4'>
                <button className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all'>
                <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-10 w-10 text-white"   // الحجم 10x10 واللون أبيض
  viewBox="0 0 24 24"
  fill="currentColor"
>
  {/* الدائرة */}
  <circle cx="12" cy="12" r="10" fill="currentColor" />

  {/* المثلث ديال Play */}
  <polygon points="10,8 16,12 10,16" fill="black" />
</svg>


                    Watch Now 
                </button>
                <button className='bg-neutral-800/80 hover:bg-neutral-700/80 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all border border-neutral-600'>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className='h-5 w-5'
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                     d="M12 4v16m8-8H4"
                     />
                    </svg>
                    Add to Watch List
                </button>
            </div>
        </div>
    </div>
  </div> 
  { /* pagination */ }
  <div className='absolute botton-10 left-0 right-0 flex justify-center gap-2 z-10'>
    {featuredMovies.map((_, index) => {
     return ( 
     <button 
     key={index} 
     onClick={()=>{
      setIsTransittioning(true);
      setTimeout(()=>{
        setCurrentSlide(index);
        setIsTransittioning(false);
      }, 500)
     }}
     className={`h-1.5 rounded-full transition-all ${
      currentSlide === index 
      ? "w-8 bg-purple-500" 
      : "w-4 bg-neutral-600/50"
    }`}
    ></button>
     )
    })}
    {/* { conditional rendering } */}
    
  </div>
</div>
); 
}

export default HeroSection

