"use client";

import { useState, useEffect } from "react";
import { getUsers } from "@/service/github";
import UserCard from "@/components/user-card";
import type { GitHubUser } from "@/service/github";

export default function UserList() {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [since, setSince] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadInitialUsers();
  }, []);

  const loadInitialUsers = async () => {
    try {
      setLoading(true);
      const initialUsers = await getUsers(0);
      setUsers(initialUsers);
      setSince(initialUsers[initialUsers.length - 1]?.id || 0);
      setHasMore(initialUsers.length === 30);
    } catch (error) {
      console.error("Failed to load users:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreUsers = async () => {
    if (loadingMore || !hasMore) return;

    try {
      setLoadingMore(true);
      const moreUsers = await getUsers(since);

      if (moreUsers.length === 0) {
        setHasMore(false);
        return;
      }

      setUsers((prev) => [...prev, ...moreUsers]);
      setSince(moreUsers[moreUsers.length - 1]?.id || since);
      setHasMore(moreUsers.length === 30);
    } catch (error) {
      console.error("Failed to load more users:", error);
    } finally {
      setLoadingMore(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <button
            onClick={loadMoreUsers}
            disabled={loadingMore}
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-base font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loadingMore ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600 mr-2"></div>
                Loading...
              </>
            ) : (
              "Load More Users"
            )}
          </button>
        </div>
      )}

      {!hasMore && users.length > 0 && (
        <div className="text-center text-gray-500 py-8">
          <p>{"You've reached the end of the user list!"}</p>
        </div>
      )}
    </div>
  );
}
