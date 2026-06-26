import MovieCard from "./MovieCard";

function MovieGrid({ movies = [] }) {


  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-10">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          poster={movie.Poster}
          year={movie.Year}
        />
      ))}
    </div>
  );
}

export default MovieGrid;