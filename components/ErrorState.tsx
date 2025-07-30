
interface ErrorStateProps {
  message: string
  onRetry: () => void
}

export default function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="text-center text-red-500">
      <p>{message}</p>
      <button
        onClick={onRetry}
        className="mt-2 px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Retry
      </button>
    </div>
  )
}
