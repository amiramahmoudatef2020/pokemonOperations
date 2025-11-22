import { useQuery } from '@tanstack/react-query';
export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export const LIMIT = 20;

export function usePaginatedPokemon(page: number) {
  const offset = (page - 1) * LIMIT;
  const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`;
  const proxyUrl = `/api/proxy?url=${encodeURIComponent(apiUrl)}`;

  return useQuery<PokemonListResponse>({
    queryKey: ['pokemon', page],
    queryFn: async () => {
      const res = await fetch(proxyUrl);
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
  });
}
