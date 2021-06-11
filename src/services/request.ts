export default {
  fetchTrending: {
    title: 'Trending',
    url: `/treding/all/week?api_key=${process.env.API_KEY}&language=en-US`,
  },

  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US`,
  },

  fetchActionMovies: {
    title: 'Action',
    url: `/discovery/movie?api_key=${process.env.API_KEY}&with_genres=28`,
  },

  fetchComedyMovies: {
    title: 'Comedy',
    url: `/discovery/movie?api_key=${process.env.API_KEY}&with_genres=35`,
  },

  fetchHorrorMovies: {
    title: 'Horror',
    url: `/discovery/movie?api_key=${process.env.API_KEY}&with_genres=27`,
  },

  fetchRomanceMovies: {
    title: 'Romance',
    url: `/discovery/movie?api_key=${process.env.API_KEY}&with_genres=10749`,
  },

  fetchMystery: {
    title: 'Mystery',
    url: `/discovery/movie?api_key=${process.env.API_KEY}&with_genres=9648`,
  },
};
