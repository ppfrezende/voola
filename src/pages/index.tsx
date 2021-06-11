import { GetServerSideProps } from 'next';
import { api } from '../services/api';
import request from '../services/request';

import { Thumbnail } from '../components/Thumbnail';

export interface FilmProps {
  id: number;
  title: string;
  description: string;
  primaryImagePath: string;
  secondaryImagePath: string;
  popularity: number;
  voteAverage: number;
  likesCount: number;
}

interface HomeProps {
  results: FilmProps[];
}

export default function Home({ results }: HomeProps) {
  return (
    <div>
      {results.map(result => (
        <Thumbnail key={result.id} {...result} />
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const genre = context.query.genre;

  const { data } = await api.get(
    `${request[genre]?.url || request.fetchTrending.url}`
  );

  const results = data.results.map(movie => {
    return {
      id: movie.id,
      title: movie.original_title || movie.original_name,
      description: movie.overview,
      primaryImagePath: movie.backdrop_path,
      secondaryImagePath: movie.poster_path,
      popularity: movie.popularity,
      voteAverage: movie.vote_average,
      likesCount: movie.vote_count,
    };
  });

  return {
    props: {
      results,
    },
  };
};

// backdrop_path
// poster_path
// overview
