import React, { useEffect, useState } from 'react'

function MoviesDetails({movieId, onClose}) {
        const [movie, setMovie] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

     useEffect(()=>{
        async function getMoviesDetails(){
            try {
                
            } catch (error) {
                
            }
        }
     },[])   
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/95 backdrop-blur-sm overflow-auto'>
            <div className='relative w-full maw-w-5xl bg-neutral-800 rounded-lg shadow-xl maw-h [900vh] overflow-hidden'>
                {/* { close button } */}
                <button className='absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-700/80 text-white hover:bg-neutral-600/80 transition-all'>
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

                {/* { conditional rendering } */}
                <div className='flex items-center justify-center h-96'>
                    <div className='animate-pulse'>
                        <div className='w-16 h-16 border-purple-500 border-t-transparent rounded-full animate-spin'>
                            <p>Loading Details........</p>
                        </div>
                    </div>
                    {/* { If } */}
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
                        strokeWidth="{2}"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3l-5.467-9.45c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                        </svg>
                     <h2 className='text-xl font-bold mt-4'>
                        Failed to load details
                        </h2>
                     <p className='mt-2 text-neutral-400'>Error</p>
                     <button className='mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md'>
                        Close
                        </button>
                        </div>
                    </div>
                    {/* { else } */}
                    <div>
                        {/* { backdrop header } */}
                        <div className='relative h-72 md:h-96 w-full'>
                            {/* { conditional rendreing } */}
                            <img src="" alt="" className='w-full h-full object-cover'/>
                            {/* { else } */}
                            <div className='w-full h-full bg-neutral-700'></div>

                            {/* { Grandient overlay } */}
                            <div className='absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-800/70 to-transparent'></div>
                        </div>

                        <div className='p-6 md:p-8'>
                            <div className='md:flex gap-8 -mt-32 md:-mt-48 relative'>
                                {/* { Poster } */}
                                <div className='w-32 md:w-64 flex-shrink-0 mb-4 md:mb-0'>
                                    <div className='rounded-lg overflow-hidden shadow-lg border border-neutral-700'>
                                        {/* { conditional rendering } */}
                                        <img src="" alt="" className='w-full h-auto'/>
                                        {/* { else } */}
                                        <div className='w-full aspect-[2/3] bg-neutral-700 flex items-center justify-center'>
                                        No Poster Available
                                        </div>
                                    </div>
                                </div>

                                 {/* { Movies Info} */}
                            <div className='flex-1'>
                                <h1 className='text-3xl md:text-4xl font-bold text-white'>
                                    Movies Title
                                    {/* { conditional Rendering } */}
                                    <span className='text-neutral-400 font-normal ml-2'></span>
                                    </h1>

                                    {/* {Rating and Other meta } */}
                                    <div className='flex flex-wrap gapx-4 gapy-2 mt-3 text-sm items-center'>
                                        {/* { condition rendring } */}
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
                                            Movies Vote Average
                                            </span>
                                        </div>
                                        {/* { else } */}
                                        <span className='text-neutral-300'>Movies Rutime</span>
                                        {/* { conditional Rendrering } */}
                                        <span className='text-neutral-300'>Movies Relase date</span>
                                        {/* { conditional Rendrering } */}
                                        <span className='bg-red-500/80 text-white text-xs px-2 py-0.5 rounded'>
                                        +18
                                        </span>
                                    </div>

                                    {/* { generes } */}
                                    {/* { conditional rendering } */}
                                    <div className='mt-4 flex flrx-wrap gap-2'>
                                        <span className='bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-sm'>
                                            Genere Name
                                            </span>
                                    </div>

                                   {/* { Tagline }  */}
                                   <p className='mt-4 text-neutral-400 italic'>Movies Tagline</p>

                                   {/* { overview } */}
                                   <div className='mt-6'>
                                    <h2 className='text-xl font-semiblod text-white mb-2'>
                                        Overview
                                        </h2>
                                    <p className='text-neutral-300'>Movies Overview</p>
                                   </div>

                                   {/* { buttons } */}
                                   <div className='mt-8 flex flex-wrap gap-3'>
                                  <button className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors'>
                                  <svg 
                                   xmlns="http://www.w3.org/2000/svg" 
                                   className="h-5 w-5" 
                                   viewBox="0 0 20 20" 
                                   fill="currentColor"
                                   >
                                   <path 
                                   fillRule="evenodd" 
                                   d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3.25-2a1 1 0 000-1.664l-3.25-2z" 
                                   clipRule="evenodd" 
                                   />{" "}
                                   </svg>
                                    Watch Now
                                  </button>
                                  <div className='bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors'>
                                  <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   className="h-5 w-5"
                                   fill="none"
                                   viewBox="0 0 24 24"
                                   stroke="currentColor"
                                   >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 4v16m8-8H4"
                                    />
                                  </svg>
                                  Add to Watchlist
                                  </div>
                                   </div>
                                </div>

                                {/* { Additional Details } */}
                                <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
                                    <div>
                                        <h2 className='text-xl font-semibold text-white mb-4'>
                                            Details
                                            </h2>
                                        <div className='space-y-4'>
                                            {/* { conditional rendering } */}
                                            <div className='text-neutral-400 text-sm mb-1'>
                                                <h3 className='text-neutral-400 text-sm mb-1'>
                                                    Production Companies
                                                    </h3>
                                                <p className='text-white'>
                                                    Movies Production Counties
                                                    </p>
                                            </div>

                                            <div className='text-neutral-400 text-sm mb-1'>
                                            <h3 className='text-neutral-400 text-sm mb-1'>
                                                    Languages
                                                    </h3>
                                                <p className='text-white'>Language</p>
                                            </div>

                                            <div className='text-neutral-400 text-sm mb-1'>
                                            <h3 className='text-neutral-400 text-sm mb-1'>
                                                    Budget
                                                    </h3>
                                                <p className='text-white'>Movies budget</p>
                                            </div>

                                            <div className='text-neutral-400 text-sm mb-1'>
                                            <h3 className='text-neutral-400 text-sm mb-1'>
                                                    Revenue
                                                    </h3>
                                                <p className='text-white'>Revenue</p>
                                            </div>

                                            <div className='text-neutral-400 text-sm mb-1'>
                                            <h3 className='text-neutral-400 text-sm mb-1'>
                                                  Status
                                                    </h3>
                                                <p className='text-white'>Status</p>
                                            </div>

                                            <div className='text-neutral-400 text-sm mb-1'>
                                            <h3 className='text-neutral-400 text-sm mb-1'>
                                                    Original Language
                                                    </h3>
                                                <p className='text-white'>Original Language</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* { Right Column } */}
                                    <div>
                                     <h2 className='text-xl font-semibold text-white mb-4'>
                                        Rating
                                        </h2>
                                     {/* { conditional Rendering } */}
                                     <div className='flex items-center'>
                                        <div className='w-24 h-24 rounded-full border-4 border-purple-500 flex items-center justify-center mr-4'>
                                            <span className='text-3xl font-bold'>
                                                Movie Average
                                            </span>
                                        </div>
                                        <div>
                                            <p className='text-neutral-300'>Votes</p>
                                          <div className='w-full bg-neutral-700 rounded-full h-2.5 mt-2'>
                                            <div className='bg-purple-500 h-2.5 rounded-full'></div>
                                            </div>  
                                        </div>
                                     </div>
                                     {/* { else } */}
                                     <p className='text-neutral-400'>No Rating Available</p>
                                    </div>

                                     {/* { IMDB AND Homage page link } */}
                                     <div className='mt-8 space-y-4'>
                                        {/* { conditional Rendering} */}
                                        <a 
                                        href="#" 
                                        className='inline-flex items-center bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded-lg transition-all'
                                        >
                                            <svg 
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-3.403 3-9s-1.343-9-3-9m-9 18c1.657 0 3-3.403 3-9s-1.343-9-3-9m9 9a9 9 0 01-9 9"
                                            />
                                            </svg> 
                                            Official Website
                                            </a>
                                            {/* { conditional rendering } */}
                                           <a 
                                           href="" 
                                           className='inline-flex items-center bg-yellow-700 hover:bg-yellow-600 text-white px-4 py-2 rounded transition-colors'
                                           >
                                            <svg 
                                            class="h-5 w-5 mr-2" 
                                            viewBox="0 0 24 24" 
                                            fill="currentColor"
                                            >
                                           <path d="M14.31 9.588V.005c-.077-.048-.22-.07-.42-.07V4.815c.27.44-.06.5-.165.062-.104.095-.405.095-.885V-2.866c.0-.33-.004-.54-.033-.63-.022-.096-.067-.163-.143-.204Z"/>
                                           <path d="M22.416 0M1.62.742 0 1.62.698 0.032 1.558V20.883c.86.711.559 1.588 1.559V20.798c.877 0 1.587-.698 1.587-1.559V1.558c24.003.698 23.295 0 22.416 0M7.72 13.12c0.368-.023.62-.06.767-.046.142-.133.27-.26.37-.34.11-.297.194-.48.252-.177.053-.412.08-.697.044.56.88.99h1.376c.261 0 .467.027.632.07.163.045.301.113.413.204.11.09.19.203.24.34.052.134.076.313.076.531V.294c0 .253-.038.453-. 12.6-.079.35-.21.27-.39.364V.01c.232.1.39.23.48.39.092.154.139.362. 139.62V.702zM4.97-.005c0 .424-.11.748-.327.982-.222.233-.488.35-.806.35-.203 0-.356-.035-.48-.103-.121-.008-.217-.155-.297-.2c.071-.11-.133-.2-.156-.343-.023-.126-.04-.345-.04-.639V.42c0-.42.077-.735.238-.955.166-.223.433-.335.793-.335.358 0 .624.117.79.335.164.22.245.535.245.954V.692zM4.213-3.277c0 .419-.115.727-.342.918-.23.192-.46.288-.988.288H.5V.212H14.08V8.989h1.683c.379 0.69.095.922.28.337.185.35.392.35.918V.656Z"/>
                                           <path d="M6.162 10.13c-.039-.086-.1-.155-.181-.193-.085-.042-.21-.062-.379-.062H5.417V1.723h.392c.172 0 .302-.023.384-.073.086-.047.148-.113.193-.2.048-.09.07-.14.07-.366V-.468c0-.15-.028-.274-.074-.36z" />
                                            </svg>
                                            View on IMDB
                                           </a>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

export default MoviesDetails;
