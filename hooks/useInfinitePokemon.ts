import { useInfiniteQuery } from '@tanstack/react-query';

const LIMIT = 40;

export function useInfinitePokemon() {
  return useInfiniteQuery({
    queryKey: ['pokemon-infinite'],
    queryFn: async ({ pageParam }: { pageParam?: string }) => {
      const apiUrl = pageParam
        ? pageParam
        : `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=0`;

      const proxyUrl = `/api/proxy?url=${encodeURIComponent(apiUrl)}`;

      const res = await fetch(proxyUrl);
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    },
    getNextPageParam: (lastPage) => lastPage.next,
  });
}
