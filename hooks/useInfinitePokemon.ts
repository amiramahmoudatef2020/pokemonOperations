import { useInfiniteQuery } from '@tanstack/react-query';

const LIMIT = 40;

export function useInfinitePokemon() {
  return useInfiniteQuery({
    queryKey: ['pokemon-infinite'],
    queryFn: async ({ pageParam }: { pageParam?: string }) => {
      const url = pageParam
        ? pageParam
        : `https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=0`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    },
    getNextPageParam: (lastPage) => lastPage.next,
  });
}
