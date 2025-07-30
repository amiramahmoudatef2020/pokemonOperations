'use client';
import { useState } from 'react';
import PaginatedPokemonPage from '../components/PaginatedPokemonPage';
import LoadMorePokemonPage from '../components/LoadMorePokemonPage';

export default function HomePage() {
  const [tab, setTab] = useState<'pagination' | 'infinite'>('pagination');

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center">⚡ Pokédex</h1>
      <p className="text-center mb-4">
        Discover and explore Pokemon with infinite scroll
      </p>

      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            tab === 'pagination' ? 'bg-black text-white' : 'bg-white text-black'
          }`}
          onClick={() => setTab('pagination')}
        >
          Page Controls
        </button>
        <button
          className={`px-4 py-2 rounded ${
            tab === 'infinite' ? 'bg-black text-white' : 'bg-white text-black'
          }`}
          onClick={() => setTab('infinite')}
        >
          Infinite Scroll
        </button>
      </div>

      {tab === 'pagination' ? (
        <PaginatedPokemonPage />
      ) : (
        <LoadMorePokemonPage />
      )}
    </div>
  );
}
