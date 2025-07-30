'use client';

import Image from 'next/image';

interface PokemonDetailProps {
  data: any;
}

export const PokemonDetail = ({ data }: PokemonDetailProps) => {
  const {
    name,
    id,
    sprites,
    height,
    weight,
    types,
    abilities,
    stats,
    base_experience,
  } = data;

  const formatStatName = (stat: string) =>
    stat
      .replace('special-attack', 'Sp. Attack')
      .replace('special-defense', 'Sp. Defense')
      .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="max-w-4xl mx-auto rounded-2xl shadow-xl overflow-hidden bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-6 text-center">
        <h1 className="text-3xl font-bold capitalize">
          {name}{' '}
          <p className="text-sm font-normal text-white/80">
            #{id.toString().padStart(3, '0')}
          </p>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-8 items-center">
        {/* Left Column - Image & Physical Stats */}
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 rounded-full border-4 border-white shadow-lg bg-white overflow-hidden mb-4">
            <Image
              src={
                sprites?.other?.['official-artwork']?.front_default ||
                '/fallback.png'
              }
              alt={name}
              width={160}
              height={160}
              className="object-contain"
            />
          </div>

          {/* Types */}
          <div className="flex flex-wrap gap-2 mb-4">
            {types.map(({ type }: any) => (
              <span
                key={type.name}
                className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
              >
                {type.name}
              </span>
            ))}
          </div>

          {/* Height & Weight */}
          <div className="flex justify-center gap-12 text-center">
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Height
              </div>
              <div className="text-xl font-bold">{height / 10} m</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Weight
              </div>
              <div className="text-xl font-bold">{weight / 10} kg</div>
            </div>
          </div>
        </div>

        {/* Right Column - Stats & Abilities */}
        <div className="space-y-6 mt-2">
          {/* Base Stats */}
          <div>
            <h2 className="text-xl font-bold mb-3">Base Stats</h2>
            {stats.map(({ stat, base_stat }: any) => (
              <div key={stat.name} className="mb-3">
                <div className="flex justify-between text-sm font-medium">
                  <span>{formatStatName(stat.name)}</span>
                  <span>{base_stat}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-black rounded"
                    style={{ width: `${Math.min(base_stat, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Abilities */}
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              Abilities
            </div>
            <div className="flex flex-wrap gap-2">
              {abilities.map(({ ability, is_hidden }: any) => (
                <span
                  key={ability.name}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {ability.name}
                  {is_hidden && (
                    <span className="text-xs ml-1 text-gray-500">(Hidden)</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Base Experience */}
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              Base Experience
            </div>
            <div className="text-purple-600 font-bold text-lg">
              {base_experience} XP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
