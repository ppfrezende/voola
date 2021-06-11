import { GetServerSideProps } from 'next';
import FlipMove from 'react-flip-move';

import { api } from '../services/api';
import request from '../services/request';

import Thumbnail from '../components/Thumbnail';

export interface FilmProps {
  id: number;
  title: string;
  description: string;
  releaseDate: string;
  primaryImagePath: string;
  secondaryImagePath: string;
  likesCount: number;
}

interface HomeProps {
  results: FilmProps[];
}

export default function Home({ results }: HomeProps) {
  return (
    <FlipMove
      className="
        px-5 
        my-10 
        sm:grid 
        md:grid-cols-2
        xl:grid-cols-3
        3xl:flex flex-wrap justify-center"
    >
      {results.map(result => (
        <Thumbnail key={result.id} {...result} />
      ))}
    </FlipMove>
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
      releaseDate: movie.release_date || movie.first_air_date || null,
      primaryImagePath: movie.backdrop_path,
      secondaryImagePath: movie.poster_path,
      likesCount: movie.vote_count,
    };
  });

  return {
    props: {
      results,
    },
  };
};
