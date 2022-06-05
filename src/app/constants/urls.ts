import {environment} from '../../environments/environment';


export const {API, apiKey } = environment

export const urls = {
  movies: `/discover/movie${apiKey}`,
  movie: `/movie/`,

  genres: `/genre/movie/list`,
  search: `/search/movie${apiKey}`,

  tvShows: `/discover/tv${apiKey}`,
  tvShow: `/tv/`,

  peoples: `/person/popular${apiKey}`,
  people: `/person/`
}
