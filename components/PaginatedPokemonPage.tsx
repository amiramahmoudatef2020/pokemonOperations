'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { usePaginatedPokemon, LIMIT } from '../hooks/usePaginatedPokemon';
import PokemonGrid from './PokemonGrid';
import PokemonCard from './PokemonCard';
import SkeletonCard from './SkeletonCard';
import ErrorState from './ErrorState';
import PaginationControls from './PaginationControls';

export default function PaginationPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const p = Number(searchParams.get('page') || 1);
    setPage(p);
  }, [searchParams]);

  type PaginatedPokemonData = {
    count: number;
    results: { name: string; url: string }[];
  };

  const { data, isLoading, isError, refetch } = usePaginatedPokemon(page) as {
    data: PaginatedPokemonData | undefined;
    isLoading: boolean;
    isError: boolean;
    refetch: () => void;
  };

  const handlePageChange = (p: number) => {
    router.push(`?page=${p}`);
  };

  const totalPages = data ? Math.ceil(data.count / LIMIT) : 0;

  return (
    <div className="space-y-6">
      {isLoading && (
        <PokemonGrid>
          {Array.from({ length: LIMIT }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </PokemonGrid>
      )}

      {isError && (
        <ErrorState message="Failed to load Pokémon" onRetry={refetch} />
      )}

      {data && (
        <>
          <PokemonGrid>
            {data.results.map((pokemon: any) => {
              const id = pokemon.url.split('/').filter(Boolean).pop();
              return (
                <PokemonCard key={pokemon.name} id={id} name={pokemon.name} />
              );
            })}
          </PokemonGrid>
          <PaginationControls
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}
