export default function UserListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
        >
          <div className="p-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-20 h-20 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="space-y-2 text-center w-full">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4 mx-auto"></div>
                <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
