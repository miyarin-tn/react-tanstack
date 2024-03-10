import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';

export function useCustomQuery<T>(options: UseQueryOptions<T>): UseQueryResult<T> {
  return useQuery<T>({
    refetchOnWindowFocus: false,
    retry: false,
    ...options,
  });
}
