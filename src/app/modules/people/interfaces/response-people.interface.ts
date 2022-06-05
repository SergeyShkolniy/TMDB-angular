import {IPeople} from './people.interface';


export interface IResponsePeople {
  page: number,
  total_pages: number,
  results: IPeople[]
}
