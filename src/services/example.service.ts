import axiosCustom from '@/plugins/axios';
import { API_EXAMPLE_ROUTES } from '@/routes/api-example.route';

export interface Todo {
  id: number;
  title: string;
  status: string;
  priority: string;
}

export interface Pagination<T> {
  count: number; 
  next: string | null; 
  previous: string | null;
  results: T[];
}

export interface People {
  name:       string;
  height:     string;
  mass:       string;
  hair_color: string;
  skin_color: string;
  eye_color:  string;
  birth_year: string;
  gender:     string;
  homeworld:  string;
  films:      string[];
  species:    string[];
  vehicles:   string[];
  starships:  string[];
  created:    Date;
  edited:     Date;
  url:        string;
}

export const exampleService = {
  async getTodoList(): Promise<Todo[]> {
    const response = await axiosCustom.get<Todo[]>(API_EXAMPLE_ROUTES.TODO);
    return response.data;
  },
  async getTodoDetail(id: number): Promise<Todo> {
    const response = await axiosCustom.get<Todo>(API_EXAMPLE_ROUTES.TODO_DETAIL.replace('{id}', String(id)));
    return response.data;
  },
  async getPeopleList({ pageParam }: any) {
    const response = await axiosCustom.get<Pagination<People>>(API_EXAMPLE_ROUTES.PEOPLE.replace('{page}', pageParam), {
      baseURL: 'https://swapi.py4e.com/api',
    });
    return response.data;
  },
};
