import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";

function Home({ movies, search, setSearch, fetchMovies }) {
  return (

    
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-5xl font-bold text-center">
          🎬 Movie Search App
        </h1>


        <p className="text-center text-gray-400 mt-4">
          Search your favorite movies
        </p>

        
<div className="mt-10">
  <SearchBar
    query={search}
    setQuery={setSearch}
    fetchMovies={fetchMovies}
  />
</div>

{movies.length > 0 ? (
  <MovieGrid movies={movies} />
) : (
  <div className="mt-16 text-center">
    <h2 className="text-3xl font-bold text-white">
      🍿 Welcome to Movie Search
    </h2>
    <p className="mt-4 text-gray-400 text-lg">
      Search for your favorite movies and discover amazing films.
    </p>
    <p className="mt-2 text-gray-500">
      Enter a movie name above and click the Search button.
    </p>
  </div>
)}
      </div>
    </main>
  );
}

export default Home;