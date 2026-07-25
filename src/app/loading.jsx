export default function Loading() {
  return (
    <div className="container mx-auto grid gap-6 p-6">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-xl border bg-white p-5"
        >
          <div className="mb-4 h-52 rounded-lg bg-gray-300"></div>

          <div className="mb-3 h-6 w-3/4 rounded bg-gray-300"></div>

          <div className="mb-2 h-4 w-full rounded bg-gray-200"></div>

          <div className="mb-2 h-4 w-5/6 rounded bg-gray-200"></div>

          <div className="h-4 w-1/2 rounded bg-gray-200"></div>
        </div>
      ))}
    </div>
  );
}