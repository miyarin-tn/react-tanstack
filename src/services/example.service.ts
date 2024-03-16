import axiosCustom from '@/plugins/axios';
import { API_EXAMPLE_ROUTES } from '@/routes/api-example.route';

export interface Todo {
  id: number;
  title: string;
  status: string;
  priority: string;
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
};
