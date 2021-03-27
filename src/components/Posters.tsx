
import { MovieCard } from './MovieCard';
import { MovieProps } from '../App';

interface PostersProps {
  movies: MovieProps[];
}

export function Posters(props: PostersProps) {
  const { movies } = props;
  
  return (
    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  )
}