import {IMovie} from './movie.interface';

export interface IResponseMovie {
  page: number,
  total_pages: number,
  results: IMovie[]
}
