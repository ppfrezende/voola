import { GetServerSideProps } from 'next';
import { api } from '../services/api';
import request from '../services/request';

import { Thumbnail } from '../components/Thumbnail';

interface Genre {
  title: string;
  url: string;
}

interface HomeProps {
  results: Genre[];
}

export default function Home({ results }: HomeProps) {
  return (
    <div>
      {results.map(result => (
        <Thumbnail />
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const genre = context.query.genre;

  const { data } = await api.get(
    `${request[genre]?.url || request.fetchTrending.url}`
  );

  const results = data.results;

  return {
    props: {
      results,
    },
  };
};
