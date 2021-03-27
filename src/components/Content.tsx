
import { useEffect, useState } from 'react';

import { api } from '../services/api';

import { MovieCard } from './MovieCard';
import { Posters } from './Posters';
import { GenreResponseProps, MovieProps } from '../App';
import { ContentHeader } from './ContentHeader';

interface ContentProps {
  selectedGenreId: number;
}

export function Content(props: ContentProps) {
  const { selectedGenreId } = props;

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);
  
  return (
    <div className="container">
      <ContentHeader genreTitle={selectedGenre.title} />
      <Posters movies={movies} />
    </div>
  )
}