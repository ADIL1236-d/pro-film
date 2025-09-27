import React from 'react';
import Navbar from "./components/Navbar";
import MovieContent from "./components/MovieContent";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { MoviesProvider } from "./contex/MoviesContext";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WatchList from './pages/WatchList';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <MoviesProvider>
        <BrowserRouter>
          <div className='min-h-screen text-white bg-neutral-900'>
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<MovieContent />} />
                  <Route 
                    path="/watchlist" 
                    element={
                      <ProtectedRoute>
                        <WatchList />
                      </ProtectedRoute>
                    }
                  />
                <Route 
                  path="/login" 
                  element={<Login />} 
                />
                <Route 
                  path="/register" 
                  element={<Register />}
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
            <ScrollToTop />
              </div>
            </div>
        </BrowserRouter>
      </MoviesProvider>
    </AuthProvider>
  );
}

export default App;
