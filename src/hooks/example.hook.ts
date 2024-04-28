import { QUERY_KEY } from '@/constants/query-key';
import { exampleService, Pagination, People, Todo } from '@/services/example.service';
import {
  InfiniteData,
  UndefinedInitialDataInfiniteOptions,
  UseInfiniteQueryResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { useCustomQuery, useInfiniteCustomQuery } from './custom-query.hook';

type UseTodoListOptions = Omit<UseQueryOptions<Todo[]>, 'queryKey' | 'queryFn'>;
type UseTodoDetailOptions = Omit<UseQueryOptions<Todo>, 'queryKey' | 'queryFn'>;
type UsePeopleListOptions = Omit<UndefinedInitialDataInfiniteOptions<Pagination<People>>, 'queryKey' | 'queryFn'> & {
  initialPageParam?: number;
};

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

export function usePeopleList(options?: UsePeopleListOptions): UseInfiniteQueryResult<InfiniteData<Pagination<People>>> {
  return useInfiniteCustomQuery<Pagination<People>>({
    ...options,
    queryKey: [QUERY_KEY.PEOPLE_LIST],
    queryFn: exampleService.getPeopleList,
    initialPageParam: options?.initialPageParam ?? 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage?.next) return undefined;
      const url = new URL(lastPage?.next);
      const params = new URLSearchParams(url.search);
      return Number(Object.fromEntries(params).page);
    },
  });
}
