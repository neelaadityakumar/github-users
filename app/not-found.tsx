import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          <div className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center"></div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              User Not Found
            </h2>
            <p className="text-gray-600 mb-6">
              The GitHub user {"you're"} looking for {"doesn't"} exist or may
              have been deleted.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Back to Users
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
