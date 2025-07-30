
export default function SkeletonCard() {
  return (
    <div className="flex flex-col items-center p-4 border rounded-md bg-gray-100 dark:bg-gray-700 animate-pulse">
      <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded" />
      <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-600 mt-3 rounded" />
      <div className="w-1/2 h-3 bg-gray-300 dark:bg-gray-600 mt-2 rounded" />
    </div>
  )
}
