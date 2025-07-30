'use client';

import { useInfinitePokemon } from '../hooks/useInfinitePokemon';
import PokemonGrid from './PokemonGrid';
import PokemonCard from './PokemonCard';
import SkeletonCard from './SkeletonCard';
import ErrorState from './ErrorState';
import LoadMoreButton from './LoadMoreButton';

export default function LoadMorePage() {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfinitePokemon();

  return (
    <div className="space-y-6">
      {isLoading && (
        <PokemonGrid>
          {Array.from({ length: 20 }).map((_, i) => (
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
            {data.pages.flatMap((page: any) =>
              page.results.map((pokemon: any) => {
                const id = pokemon.url.split('/').filter(Boolean).pop();
                return (
                  <PokemonCard key={pokemon.name} id={id} name={pokemon.name} />
                );
              })
            )}
          </PokemonGrid>
          {hasNextPage && (
            <LoadMoreButton
              onClick={() => fetchNextPage()}
              loading={isFetchingNextPage}
            />
          )}
        </>
      )}
    </div>
  );
}
