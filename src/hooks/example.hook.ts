import { QUERY_KEY } from '@/constants/query-key';
import { exampleService, Todo } from '@/services/example.service';
import { UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { useCustomQuery } from './custom-query.hook';

type UseTodoListOptions = Omit<UseQueryOptions<Todo[]>, 'queryKey' | 'queryFn'>;
type UseTodoDetailOptions = Omit<UseQueryOptions<Todo>, 'queryKey' | 'queryFn'>;

export function useTodoList (options?: UseTodoListOptions): UseQueryResult<Todo[]> {
  return useCustomQuery<Todo[]>({
    ...options,
    queryKey: [QUERY_KEY.TODO_LIST],
    queryFn: exampleService.getTodoList,
  });
}

export function useTodoDetail (id: number, options?: UseTodoDetailOptions): UseQueryResult<Todo> {
  return useCustomQuery<Todo>({
    ...options,
    queryKey: [QUERY_KEY.TODO_DETAIL, id],
    queryFn: () => exampleService.getTodoDetail(id),
  });
}
