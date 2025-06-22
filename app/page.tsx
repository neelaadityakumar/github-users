import { Suspense } from "react";
import UserList from "@/components/user-list";
import UserListSkeleton from "@/components/skeleton/user-list";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-gray-900">
          GitHub Users
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore GitHub users and discover their profiles, repositories, and
          contributions to the open source community.
        </p>
      </div>

      <Suspense fallback={<UserListSkeleton />}>
        <UserList />
      </Suspense>
    </div>
  );
}
