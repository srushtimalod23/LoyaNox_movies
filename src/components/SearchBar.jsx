function SearchBar({ query, setQuery, fetchMovies }) {
  return (
    <div className="flex gap-4 mt-8 justify-center">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            fetchMovies();
          }
        }}
        className="w-full max-w-md px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
      />

      <button onClick={() => fetchMovies()}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;