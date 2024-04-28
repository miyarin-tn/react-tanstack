import {
  InfiniteData,
  UndefinedInitialDataInfiniteOptions,
  UseInfiniteQueryResult,
  UseQueryOptions,
  UseQueryResult,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';

export function useCustomQuery<T>(options: UseQueryOptions<T>): UseQueryResult<T> {
  return useQuery<T>({
    refetchOnWindowFocus: false,
    retry: false,
    ...options,
  });
}

export function useInfiniteCustomQuery<T>(options: UndefinedInitialDataInfiniteOptions<T>): UseInfiniteQueryResult<InfiniteData<T>> {
  return useInfiniteQuery<T>({
    refetchOnWindowFocus: false,
    retry: false,
    ...options,
  });
}
