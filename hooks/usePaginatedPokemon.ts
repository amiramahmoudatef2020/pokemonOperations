import { useQuery } from '@tanstack/react-query';

export const LIMIT = 20;

export function usePaginatedPokemon(page: number) {
  const offset = (page - 1) * LIMIT;

  return useQuery({
    queryKey: ['pokemon', page],
    queryFn: async () => {
      const res = await fetch(
        `https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`
      );
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
  });
}
