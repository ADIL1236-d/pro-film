import React from 'react'

function ScrollToTop() {
  return (
    <div className='fixed bottom-6 right-6 z'>
     <button type='button' className={'bg-purple-600 hover:bg-purple-700 text-white p-2.5 rounded-full shadow-lg transition-all duration-300 focus:outline-none'}
     >
     <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5"
  viewBox="0 0 20 20"
  fill="currentColor"
>
  <path
    fillRule="evenodd"
    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
    clipRule="evenodd"
   />
   </svg>
     </button>
    </div>
  )
}

export default ScrollToTop