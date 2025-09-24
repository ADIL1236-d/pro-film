import React from 'react';
import Navbar from "./components/Navbar";
import MovieContent from "./components/MovieContent";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { MoviesProvider } from "./contex/MoviesContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WatchList from './pages/WatchList';

function App() {
  return (
    <MoviesProvider>
      <BrowserRouter>
        <div className='min-h-screen text-white bg-neutral-900'>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<MovieContent />} />
              <Route path="/watchlist" element={<WatchList />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </MoviesProvider>
    
  );
}

export default App;
