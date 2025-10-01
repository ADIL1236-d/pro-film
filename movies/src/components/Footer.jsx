import React from 'react'

function Footer() {
  const handleSubscribe = () => {
    console.log('Newsletter subscription!');
    // منطق الاشتراك في النشرة الإخبارية
  };

  return (
    <footer className='bg-neutral-900 text-neutral-400 border-t border-neutral-800'>
        <div className='container mx-auto px-4 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div data-aos="fade-up" 
                     data-aos-duration="1000" 
                     data-aos-delay="200">
             <a href="/" className='inline-block mb-6'>
             <span className='text-purple-500 font-bold text-2xl'>
             Moviz<span className='text-white'>Land</span>
             </span>
             </a>
             <p className='mb-4 text-sm'>
              Explore the latest movies from around the world with MovizLand 
              your platform for watching a wide variety of films across all 
              genres.
             </p>
             <div className='flex space-x-4'>
                <a 
                href="#" 
                className='text-neutral-500 hover:text-purple-500 transition-colors'
                >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.886-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                </a>
                 <a 
                 href="#" 
                 className='text-neutral-500 hover:text-purple-500 transition-colors'
                 > 
                <svg
                 xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                 fill="currentColor"
                 viewBox="0 0 24 24"
                  >
                 <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
                </svg>
                 </a>

                 <a 
                 href="#"  
                 className='text-neutral-500 hover:text-purple-500 transition-colors'
                 >
                    {" "}
                    <svg
                xmlns="http://www.w3.org/2000/svg"
                 className="h-5 w-5"
                 fill="currentColor"
                 viewBox="0 0 24 24"
                >
                 <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.241-1.918.001c-1.584 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325V-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                 </svg>
                 </a>
              </div>
            </div>

            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                <h3 className='text-white font-semibold text-lg mb-4'>
                    Quick Links
                    </h3>
                <ul className='space-y-2 text-sm'>
                    <li>
                        <a href="#" className='hover:text-purple-400 transition-all'>
                        Home
                        </a>
                    </li>
                    <li>
                        <a 
                        href="#trending" 
                        className='hover:text-purple-400 transition-all'
                        >
                        Trending
                        </a>
                    </li>
                    <li>
                        <a 
                        href="#popular" 
                        className='hover:text-purple-400 transition-all'
                        >
                        Popular
                        </a>
                    </li>
                    <li>
                        <a 
                        href="#top-rated" 
                        className='hover:text-purple-400 transition-all'
                        >
                        Top Rated
                        </a>
                    </li>
                    <li>
                        <a 
                        href="#genres" 
                        className='hover:text-purple-400 transition-all'
                        >
                        Browse by Genre
                        </a>
                    </li>
                </ul>
            </div>

            <div data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="200">
                <h3 className='text-white font-semibold text-lg mb-4'>Resources</h3>
                <ul className='space-y-2 text-sm'>
                    <li>
                        <a href="#" className='hover:text-purple-400 transition-all'>
                            About
                            </a>
                            </li>
                    <li>
                        <a href="#" className='hover:text-purple-400 transition-all'>
                            Contact
                            </a>
                            </li>
                    <li>
                        <a href="#" className='hover:text-purple-400 transition-all'>
                            Blog
                            </a>
                            </li>
                    <li>
                        <a href="#" className='hover:text-purple-400 transition-all'>
                            FAQ
                            </a>
                            </li>
                    <li>
                        <a href="#" className='hover:text-purple-400 transition-all'>
                            Help Center
                            </a>
                        </li>
                   </ul>
               </div>

               <div data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="200">
               <h3 className='text-white font-semibold text-lg mb-4'>
                Newsletter
                </h3>
               <p className='text-sm mb-4'>
                Stay up to date with the latest movies and news
                </p>
                <form className='space-y-3'>
                    <div className='relative'>
                        <input 
                        placeholder='Enter your email' 
                        type="email" 
                        className='w-full bg-neutral-800 border-neutral-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-sm' 
                        />
                    </div>
                    
                    {/* Replaced with provided Subscribe button */}
                    <button
                      type="button"
                      onClick={handleSubscribe}
                      className="relative px-8 py-2 bg-black text-white font-semibold rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group w-full"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-6 h-6 text-purple-500 group-hover:text-white transition-colors duration-300">
                          <path d="M5 13l4 4L19 7" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                        </svg>
                        <span>Subscribe</span>
                      </span>
                      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-indigo-500/20" />
                    </button>
                </form>
               </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className='border-t border-neutral-800 mt-10 pt-6 flex flex-col md:flex-row justify-between'>
                <p className='text-xs'> 
                MovizLand. all rights reserved. <br className='md:hidden' />
                <span className='hidden md:inline'>.</span>
                Powered by 
                <a href="#" className='text-purple-400 hover:text-purple-300'>
                    TMDB API
                    </a>
                </p>
               <div className='flex space-x-4 mt-4 md:mt-0 text-xs'>
               <a 
               href="#" 
               className='hover:text-purple-400 transition-all'
               >
                Privacy Policy
                </a>
                <a 
               href="#" 
               className='hover:text-purple-400 transition-all'
               >
                Terms of Service
                </a>
                <a 
               href="#" 
               className='hover:text-purple-400 transition-all'
               >
                Cookie Policy
                </a>
               </div>
               </div>
        </div>
    </footer>
  )
}

export default Footer