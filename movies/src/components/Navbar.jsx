import React, { useState, useRef, useEffect } from 'react'
import { useMovies } from '../contex/MoviesContext';

function Navbar() {
  const { isScrolled, setIsScrolled} = useMovies(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const searchContainerRef = useRef(null);

  useEffect(()=>{
    const handleScroll = ()=>{
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () =>  window.removeEventListener("scroll", handleScroll);
  }, []);
    return ( 
    <header 
    className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
      ? "bg-neutral-900/95 backdrop-blur-md shadow-lg" 
      : "bg-transparent"
      } `}
    >
<div className='container mx-auto px-4 py-4'>
  <div className='flex items-center justify-between'>
    <div className='flex items-center'>
    <a href="/" className='flex items-center'>
    <span className='text-pruple-500 font-bold text-3xl'>
    Moviz <span className='text-white'>Land</span>
    </span>
    </a>
    </div>
    {/* { desktop menu } */}
    <nav className='hidden md:flex space-x-8'>
      <a 
      href="#" 
      className='text-white hover:text-purple-400 transition-all'
      >
        Home
      </a>
      <a 
      href="#trending" 
      className='text-white hover:text-purple-400 transition-all'
      >
        Trending
      </a>
      <a 
      href="#popular" 
      className='text-white hover:text-purple-400 transition-all'
      >
        Popular
      </a>
      <a 
      href="#top-rated" 
      className='text-white hover:text-purple-400 transition-all'
      >
        Top Rated
      </a>
    </nav>

    {/* { descktop search } */}
    <div 
    className="hidden md:block relative search-container" 
    ref={searchContainerRef}
    >
      <div className='relative'>
        <input 
        type="text" 
        placeholder="Search movies..... " 
        className='bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50'
        />

        {/* { conditional rendring } */}
       {isSearching ? ( 
        <div className='absolute right-3 top-2.5'>
        <svg
           className='w-4 h-4 text-neutral-400'
           xmlns="http://www.w3.org/200/svg"
           fill="none"
           viewBox="0 0 24 24"
           >
            <circle
            className='opacity-25'
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            ></circle>
            <path
            className='opacity-75'
            fill='currentColor'
            d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
           </svg>
        </div>  
        ) : ( 
        <svg
         xmlns="http//www.w3.org/200/svg"
         className='h-4 w-4 absolute right-3 top-3 text-neutral-400'
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         >
         <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
         />
         </svg> 
          )}
    {/* { else } */}
      </div>

  {/* { search Result dropdown renddring } */}
     {showSearchResult && searchResult && searchResult.length > 0 && ( 
      <div className='absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50'>
    <ul className='divide-y divide-neutral-700'>
      <li className='hover:bg-neutral-700'>
        <button className='flex items-center p-3 w-full text-left'>
          <div className='w-10 h-10 bg-neutral-700 rounded overflow-hidden flex-shrink-0'>
            {/* { conditional rendering } */}
            <img 
            src="/" 
            alt="" 
            className='w-full object-cover'
            />
            {/* { else } */}
            <div className='w-full h-full flex items-center justify-center text-neutral-500 text-sm'>
              {" "}
              No Image
            </div>
          </div>

          <div className='ml-3 flex-1'>
            <p className='text-xs font-medium text-white truncate'>
              Movie Title
              </p>
              <p className='text-xs text-neutral-400'>
                Movie Release Date
                </p>
          </div>
        </button>
      </li>
    </ul>
  </div>
  )}

    {/* { conditional rendring } */}
   {showSearchResult && 
   searchQuery.trim().length > 2 && 
   (!searchResult || searchResult.length === 0) && 
   !isSearching && ( 
   <div className='absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50'>
      <div className='p-4 text-center text-sm'>
        No movies found matching....
      </div>
    </div>
  )}
  </div>

    {/* { mobile menu button } */}
    <button 
    className="md:hidden text-white" 
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      {/* { conditional rendring } */}
         {isMobileMenuOpen ? ( 
          <svg
         xmlns="http//www.w3.org/2000/svg"
         className='h-6 w-6'
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
          ) : ( 
          <svg
        xmlns="http//www.w3.org/2000/svg"
        className='h-6 w-6'
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
        />
        </svg>  
      )}    
    </button>
  </div>

{/* { mobile navigation conditional rendering } */}
  {isMobileMenuOpen && ( 
    <div className='mt-4 pb-4 space-y-4 md:hidden'>
  <a
  href="#" 
  className='block text-white hover:text-purple-400 transition-colors py-2'
  >
    Home
  </a>
  <a 
      href="#trending" 
      className='text-white hover:text-purple-400 transition-all'
      >
        Trending
      </a>
      <a 
      href="#popular" 
      className='text-white hover:text-purple-400 transition-all'
      >
        Popular
      </a>
      <a 
      href="#top-rated" 
      className='text-white hover:text-purple-400 transition-all'
      >
        Top Rated
      </a>
      <div className="relative mt-3 search-container" ref={searchContainerRef}>
      <input 
        type="text" 
        placeholder="Search movies..... " 
        className='bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50'
        />

        {/* { conditional rendering } */}
       {isSearching ? ( 
        <div className='absolute right-3 top-2.5'>
        <svg
           className='w-4 h-4 text-neutral-400'
           xmlns="http://www.w3.org/200/svg"
           fill="none"
           viewBox="0 0 24 24"
           >
            <circle
            className='opacity-25'
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            ></circle>
            <path
            className='opacity-75'
            fill='currentColor'
            d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
           </svg>
           {/* { else } */}
           <svg
         xmlns="http//www.w3.org/200/svg"
         className='h-4 w-4 absolute right-3 top-3 text-neutral-400'
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         >
         <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
         />
         </svg>
         </div>
           ) : (  
            <svg
         xmlns="http//www.w3.org/200/svg"
         className='h-4 w-4 absolute right-3 top-3 text-neutral-400'
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         >
         <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
         />
         </svg>
        )}

         {/* { mobile search result conditional rendering } */}
        {showSearchResult && searchResult && searchResult.length > 0 && (
        <div className='absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50'>
          <ul className='divide-y divide-neutral-700'>
            {/* { map method } */}
            <li className='hover:bg-neutral-700'>
              <button className='flex items-center p-3 w-full text-left'>
                <div className='w-10 h-10 bg-neutral-700 rounded-full overflow-hidden flex-shrink-0'>
                  {/* { conditional rendring } */}
                  <img 
                  src="/" 
                  alt="" 
                  className='w-full h-full object-cover'
                  />
                  {/* { else } */}
                  <div className='w-full h-full flex items-center justify-center text-neutral-500 text-xs'>
                    No Image
                  </div>
                </div>

                <div className='ml-3 flex-1'>
                  <p className='text-sm font-medium text-white truncate'>
                    Movies Title
                    </p>
                    <p className='text-xs text-neutral-400'>
                      Movies release date
                      </p>
                </div>
              </button>
            </li>
          </ul>
         </div>
         )}

    {/* { conditional renreing } */}
    {showSearchResult && 
    searchQuery.trim().length > 2 && 
    (!searchResult || searchResult.length === 0) && 
    !isSearching && (
    <div className='absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50'>
      <div className='p-4 text-center text-neutral-400 text-sm'>
      No Movies found matching......
      </div>
    </div>
    )}
        </div>
      </div>
  )}
  </div>
</header>
    )
}

export default Navbar
