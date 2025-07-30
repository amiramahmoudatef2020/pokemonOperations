import { PokemonDetail } from '../../../components/PokemonDetail';
import { notFound } from 'next/navigation';

interface PokemonPageProps {
  params: {
    id: string;
  };
}

export default async function PokemonPage({ params }: PokemonPageProps) {
  const { id } = params;

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      next: { revalidate: 3600 }, // revalidate every hour
    });

    if (!res.ok) {
      notFound(); // show 404 page if invalid Pokémon
    }

    const data = await res.json();

    return (
      <main className="min-h-screen bg-gray-100 dark:bg-gray-950 py-10 px-4">
        <PokemonDetail data={data} />
      </main>
    );
  } catch (error) {
    console.error('Failed to fetch Pokémon details:', error);
    notFound();
  }
}
