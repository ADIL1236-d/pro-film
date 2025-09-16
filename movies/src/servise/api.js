const API_KEY = "d48ad99a766018706d2b9b5ce7511397"
const BASE_URL = "https://api.themoviedb.org/3"

export const fetchTrendingMovies = async ()=>{
  try {
    const reponse = await fetch(
        `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`
    );

  const data = await reponse.json()
  return data.results
  }catch(error){
    console.error("Error Fetching trending movies", error)
    return [];
  }
};

export const fetchPopularMovies = async ()=>{
  try {
    const reponse = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );

  const data = await reponse.json()
  return data.results
  }catch(error){
    console.error("Error Fetching trending movies", error)
    return [];
  }
};

export const fetchTopRatedMovies = async ()=>{
    try {
      const reponse = await fetch(
          `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      )
  
    const data = await reponse.json()
    return data.results
    }catch(error){
      console.error("Error Fetching trending movies", error)
      return [];
    }
  };

  export const fetchMoviesByGenre = async (genreId)=>{
    try {
      const reponse = await fetch(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreId}&page=1`
      )
  
    const data = await reponse.json()
    return data.results
    }catch(error){
      console.error("Error Fetching trending movies", error)
      return [];
    }
  };

  export const fetchGenres = async ()=>{
    try {
      const reponse = await fetch(
          `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
      )
  
    const data = await reponse.json()
    return data.genres
    }catch(error){
      console.error("Error Fetching trending movies", error)
      return [];
    }
  };

  export const fetchMovieDetails = async (movieId)=>{
    try {
      const reponse = await fetch(
          `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
      )
  
    const data = await reponse.json()
    return data
    }catch(error){
      console.error("Error Fetching trending movies", error)
      return [];
    }
  };

  export const searchMovies = async (query)=>{
    try {
      const reponse = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include-adult=false`
      );
  
    const data = await reponse.json()
    return data.results
    }catch(error){
      console.error("Error Fetching trending movies", error)
      return [];
    }
  };

  export const getImageURl = (path, size = "original")=>{
    if(!path) return "https://via.placeholder.com/400x600?text=No+Image+Availabel"
    return `https://image.tmdb.org/t/p/${size}/${path}`
    };
  