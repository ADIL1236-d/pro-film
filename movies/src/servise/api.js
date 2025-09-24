const API_KEY = "d48ad99a766018706d2b9b5ce7511397"
const BASE_URL = "https://api.themoviedb.org/3"



export const getMovieTrailer = async(id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
    );
    const data = await res.json();

    const trailer = data.results.find(
      (vid) => vid.type === "Trailer" && vid.site === "YouTube"
    );

    if (trailer) {
      return `https://www.youtube.com/embed/${trailer.key}`;
    }
    return null; // Return null if no trailer is found
  } catch (error) {
    console.error("Error fetching trailer:", error);
    return null;
  }
}


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

  export const getImageUrl = (path, size = "original")=>{
    if(!path) return "https://via.placeholder.com/400x600?text=No+Image+Availabel"
    return `https://image.tmdb.org/t/p/${size}/${path}`
    };
  
    