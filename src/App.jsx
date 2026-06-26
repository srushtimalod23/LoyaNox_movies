import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const API_KEY = "bba9307e";

  const fetchMovies = async (movieName = search) => {
    if (!movieName.trim()) return;

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`
      );

      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <Home
      movies={movies}
      search={search}
      setSearch={setSearch}
      fetchMovies={fetchMovies}
    />
  );
}

export default App;