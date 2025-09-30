import React, { useState, useRef, useEffect } from 'react'
import { useMovies } from '../contex/MoviesContext';
import { useAuth } from '../context/AuthContext';
import { searchMovies } from '../servise/api';
import AnimatedButton from './AnimatedButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import Clapperboard from './Clapperboard';
import UserLoginButton from './UserLoginButton';
AOS.init();


function Navbar() {
  const {openMovieDetails} = useMovies();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchResult, setShowSearchResult] = useState(false); 
  const searchContainerRef = useRef(null);

   useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  const getImageUrl = (path, size = "original") => {
    if (!path) return '/placeholder-image.jpg';
    const baseUrl = "https://image.tmdb.org/t/p/";
    return `${baseUrl}${size}${path}`;
  };

  useEffect(()=>{
    const handleScroll = ()=>{
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(()=>{
    const handleSearch = async ()=>{
      if(searchQuery.trim().length > 2){
        setIsSearching(true);
        try{
         const result = await searchMovies(searchQuery);
         setSearchResult(result ? result.slice(0, 5) : []);
        }catch(error){
          console.error("Error Searching Movies:", error);
          setSearchResult([]);
        }finally{
          setIsSearching(false);
          setShowSearchResult(true);
        }
      }else{
        setSearchResult([]); 
        setShowSearchResult(false);
      }
    }
    const debounceTimer = setTimeout(()=>{
      handleSearch();
    }, 500);

    return () => { 
      clearTimeout(debounceTimer);
    };
  },[searchQuery]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

const handleSearchFocus = ()=>{
  if(searchQuery.trim().length > 2 && searchResult.length > 0){
    setShowSearchResult(true);
  }
};

const handleClickOutside = (e) => {
  if(
    searchContainerRef.current && 
    !searchContainerRef.current.contains(e.target)
  ) {
    setShowSearchResult(false)
  }
};

const handleMovieSelect = (movieId) => {
    setShowSearchResult(false);
    setSearchQuery("");
    openMovieDetails(movieId);
    

    setTimeout(() => {
      const movieDetail = document.querySelector('.movie-detail-modal');
      if (movieDetail) {
        const headerHeight = 80; 
        const elementPosition = movieDetail.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 150); 
  }

const handleNavigation = (section) => {
  switch(section) {
    case 'trending':
      window.location.href = '#trending';
      break;
    case 'popular':
      window.location.href = '#popular';
      break;
    case 'top-rated':
      window.location.href = '#top-rated';
      break;
    default:
      window.location.href = '/';
  }
  setIsMobileMenuOpen(false);
};

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
      <button onClick={() => handleNavigation('home')} className='flex items-center space-x-2'>
        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
          <Clapperboard width={32} height={32} />
        </div>
        <span data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" className='text-white font-bold text-3xl'>
          Moviz<span className='text-purple-500'>Land</span>
        </span>
      </button>
    </div>
    {/* desktop menu */}
    <nav className='hidden md:flex space-x-8'>
      <button 
              data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"
              onClick={() => handleNavigation('home')}
              className='text-purpel hover:text-purple-400 transition-all'
            >
              Home
            </button>
            <button 
              data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000"
              onClick={() => handleNavigation('trending')}
              className='text-white hover:text-purple-400 transition-all'
            >
              Trending
            </button>
            <button 
              data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2500"
              onClick={() => handleNavigation('popular')}
              className='text-white hover:text-purple-400 transition-all'
            >
              Popular
            </button>
            <button 
              data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000"
              onClick={() => handleNavigation('top-rated')}
              className='text-white hover:text-purple-400 transition-all'
            >
              Top Rated
            </button>
            {user ? (
              <>
                <Link 
                  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000"
                  to="/watchlist"
                  className='text-white hover:text-purple-400 transition-all'
                >
                  Watchlist
                </Link>
                <div className="flex items-center space-x-4">
                  <span className="text-purple-400">{user.name}</span>
                  <button
                    onClick={() => {
                      logout();
                      navigate('/');
                    }}
                    className="text-white hover:text-purple-400 transition-all"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                  to="/login"
                >
                  <UserLoginButton />
                </Link>
                <Link
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                  to="/register"
                >
                  <AnimatedButton text="Sign Up" />
                </Link>
              </div>
            )}
    </nav>

    {/* desktop search */}
    <div 
    className="hidden md:block relative search-container" 
    ref={searchContainerRef}
    >
      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000" className='relative'>
        <input data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000"
        type="text" 
        value={searchQuery}
        onChange={(e)=> setSearchQuery(e.target.value)}
        onFocus={handleSearchFocus}
        placeholder="Search movies..... " 
        className='bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50'
        />

        {/* conditional rendering */}
       {isSearching ? ( 
        <div className='absolute right-3 top-2.5'>
        <svg
           className='w-4 h-4 text-neutral-400 animate-spin'
           xmlns="http://www.w3.org/2000/svg" 
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
         xmlns="http://www.w3.org/2000/svg" 
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
      </div>

  {/* search Result dropdown rendering */}
     {showSearchResult && searchResult && searchResult.length > 0 && ( 
      <div className='absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50'>
    <ul className='divide-y divide-neutral-700'>
     {searchResult.map((movie)=>{
      return (
         <li key={movie.id} className='hover:bg-neutral-700'> 
        <button 
        className='flex items-center p-3 w-full text-left' 
        onClick={()=> handleMovieSelect(movie.id)}
          >
          <div className='w-10 h-10 bg-neutral-700 rounded overflow-hidden flex-shrink-0'>
            {/* conditional rendering */}
            {movie.poster_path ? ( 
              <img 
            src={getImageUrl(movie.poster_path, "w92")} 
            alt={movie.title} 
            className='w-full h-full object-cover'
            />
          ) : ( 
            <div className='w-full h-full flex items-center justify-center text-neutral-500 text-xs'>
            No Image
          </div>
        )}
          </div>

          <div className='ml-3 flex-1'>
            <p className='text-xs font-medium text-white truncate'>
              {movie.title}
              </p>
              <p className='text-xs text-neutral-400'>
              {movie.release_date?.split("-")[0] || "N/A"}
                </p>
          </div>
        </button>
      </li>)
     })}
    </ul>
  </div>
  )}

    {/* conditional rendering */}
   {showSearchResult && 
   searchQuery.trim().length > 2 && 
   (!searchResult || searchResult.length === 0) && 
   !isSearching && ( 
   <div className='absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50'>
      <div className='p-4 text-center text-sm text-neutral-400'>
        No movies found matching "{searchQuery}"
      </div>
    </div>
  )}
  </div>

    {/* mobile menu button */}
    <button 
    className="md:hidden text-white" 
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      {/* conditional rendering */}
         {isMobileMenuOpen ? ( 
          <svg
         xmlns="http://www.w3.org/2000/svg" 
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
        xmlns="http://www.w3.org/2000/svg" 
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

{/* mobile navigation conditional rendering */}
  {isMobileMenuOpen && ( 
    <div className='mt-4 pb-4 space-y-4 md:hidden'>
  <button
                onClick={() => handleNavigation('home')}
                className='block text-white hover:text-purple-400 transition-colors py-2 w-full text-left'
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('trending')}
                className='block text-white hover:text-purple-400 transition-colors py-2 w-full text-left'
              >
                Trending
              </button>
              <button
                onClick={() => handleNavigation('popular')}
                className='block text-white hover:text-purple-400 transition-colors py-2 w-full text-left'
              >
                Popular
              </button>
              <button
                onClick={() => handleNavigation('top-rated')}
                className='block text-white hover:text-purple-400 transition-colors py-2 w-full text-left'
              >
                Top Rated
              </button>
              {user ? (
                <>
                  <Link
                    to='/watchlist'
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='block text-white hover:text-purple-400 transition-colors py-2 w-full text-left'
                  >
                    Watchlist
                  </Link>
                  <div className="py-2">
                    <span className="block text-purple-400 mb-2">{user.name}</span>
                    <button
                      onClick={() => {
                        logout();
                        navigate('/');
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-white hover:text-purple-400 transition-colors w-full text-left"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <div className="py-2 space-y-2">
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <UserLoginButton />
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <AnimatedButton text="Sign Up" />
                  </Link>
                </div>
              )}
      
      {/* mobile search */}
      <div className="relative mt-3 search-container">
      <input 
        type="text" 
        value={searchQuery}
        onChange={(e)=> setSearchQuery(e.target.value)}
        onFocus={handleSearchFocus}
        placeholder="Search movies..... " 
        className='bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50'
        />

        {/* conditional rendering */}
       {isSearching ? ( 
        <div className='absolute right-3 top-2.5'>
        <svg
           className='w-4 h-4 text-neutral-400 animate-spin'
           xmlns="http://www.w3.org/2000/svg"
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
         xmlns="http://www.w3.org/2000/svg"
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

         {/* mobile search result conditional rendering */}
        {showSearchResult && searchResult && searchResult.length > 0 && (
        <div className='absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50'>
          <ul className='divide-y divide-neutral-700'>
            {searchResult.map((movie)=>{ 
              return (
              <li key={movie.id} className='hover:bg-neutral-700'> 
                <button 
                className='flex items-center p-3 w-full text-left'
                onClick={()=> handleMovieSelect(movie.id)}
                >
                  <div className='w-10 h-10 bg-neutral-700 rounded overflow-hidden flex-shrink-0'>
                    {movie.poster_path ? (
                    <img 
                    src={getImageUrl(movie.poster_path, "w92")}
                    alt={movie.title} 
                    className='w-full h-full object-cover'
                    />
                    ) : (
                    <div className='w-full h-full flex items-center justify-center text-neutral-500 text-xs'>
                      No Image
                    </div>
                    )}
                  </div>
  
                  <div className='ml-3 flex-1'>
                    <p className='text-sm font-medium text-white truncate'>
                      {movie.title}
                      </p>
                      <p className='text-xs text-neutral-400'>
                        {movie.release_date?.split("-")[0] || "N/A"}
                        </p>
                  </div>
                </button>
              </li>
              );
            })}
          </ul>
         </div>
         )}

    {/* conditional rendering */}
    {showSearchResult && 
    searchQuery.trim().length > 2 && 
    (!searchResult || searchResult.length === 0) && 
    !isSearching && (
    <div className='absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50'>
      <div className='p-4 text-center text-neutral-400 text-sm'>
      No Movies found matching "{searchQuery}"
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