import Link from "next/link";
import Image from "next/image";
import type { GitHubUser } from "@/service/github";

interface UserCardProps {
  user: GitHubUser;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <Link href={`/users/${user.login}`}>
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer group">
        <div className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src={user.avatar_url || "/placeholder.svg"}
              alt={`${user.login}'s avatar`}
              width={80}
              height={80}
              className="rounded-full ring-2 ring-gray-200 group-hover:ring-blue-500 transition-colors"
              crossOrigin="anonymous"
            />

            <div className="text-center space-y-2">
              <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                {user.login}
              </h3>

              <div className="flex items-center justify-center gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  ID: {user.id}
                </span>
                {user.type === "Organization" && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                    Org
                  </span>
                )}
              </div>

              {user.site_admin && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Site Admin
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
