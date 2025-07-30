
'use client'

interface Props {
  onClick: () => void
  loading: boolean
}

export default function LoadMoreButton({ onClick, loading }: Props) {
  return (
    <div className="flex justify-center my-4">
      <button
        onClick={onClick}
        disabled={loading}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  )
}
