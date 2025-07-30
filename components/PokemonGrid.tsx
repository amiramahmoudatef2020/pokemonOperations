
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PokemonGrid({ children }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {children}
    </div>
  )
}
