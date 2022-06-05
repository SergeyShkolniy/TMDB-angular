import {IShow} from './show.interface';


export interface IResponseShow {
  page: number,
  total_pages: number,
  results: IShow[]
}
