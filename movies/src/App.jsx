import React, { useState, useEffect } from 'react';
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
import Loader from './components/Loader';
import styled from 'styled-components';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      <MoviesProvider>
        <ScrollToTop />
        <BrowserRouter>
          {loading ? (
            <LoaderContainer>
              <Loader />
            </LoaderContainer>
          ) : (
            <div className='min-h-screen text-white bg-neutral-900'>
              <div className="">
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
          )}
        </BrowserRouter>
      </MoviesProvider>
    </AuthProvider>
  );
}

const LoaderContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #171717;
`;

export default App;
