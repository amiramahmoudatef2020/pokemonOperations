
'use client'
import Link from 'next/link'

interface PokemonCardProps {
  id: string
  name: string
}

export default function PokemonCard({ id, name }: PokemonCardProps) {
  return (
    <Link
      href={`/pokemon/${id}`}
      className="flex flex-col items-center p-4 border rounded-md bg-white dark:bg-gray-800 shadow hover:scale-105 transition-transform"
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
        className="w-24 h-24"
      />
      <h2 className="capitalize mt-2 text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">#{id.padStart(3, '0')}</p>
    </Link>
  )
}
