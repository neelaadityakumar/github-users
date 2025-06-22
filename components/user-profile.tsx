import Image from "next/image";
import Link from "next/link";
import type { GitHubUserDetails } from "@/service/github";
import LocationIcon from "@/public/icon/LocationIcon";
import TwitterIcon from "@/public/icon/TwitterIcon";
import DateIcon from "@/public/icon/DateIcon";
import CompanyIcon from "@/public/icon/CompanyIcon";
import BlogIcon from "@/public/icon/BlogIcon";
import EmailIcon from "@/public/icon/EmailIcon";

interface UserProfileProps {
  user: GitHubUserDetails;
}

export default function UserProfile({ user }: UserProfileProps) {
  const joinDate = new Date(user.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const stats = [
    { label: "Followers", value: user.followers },
    { label: "Following", value: user.following },
    { label: "Public Repos", value: user.public_repos },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow-md border border-gray-200">
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Avatar and Basic Info */}
            <div className="flex flex-col items-center md:items-start">
              <Image
                src={user.avatar_url || "placeholder.svg"}
                alt={`${user.login}'s avatar`}
                width={200}
                height={200}
                className="rounded-full ring-4 ring-gray-200 mb-4"
                crossOrigin="anonymous"
              />

              <div className="text-center md:text-left space-y-2">
                <h1 className="text-2xl font-bold text-gray-900">
                  {user.name || user.login}
                </h1>
                <p className="text-gray-600">@{user.login}</p>

                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {user.type}
                  </span>
                  {user.site_admin && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Site Admin
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="flex-1 space-y-6">
              {user.bio && (
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900">Bio</h3>
                  <p className="text-gray-600">{user.bio}</p>
                </div>
              )}

              {/* Contact Information */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Contact & Links</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {user.location && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <LocationIcon />
                      <span>{user.location}</span>
                    </div>
                  )}

                  {user.company && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CompanyIcon />
                      <span>{user.company}</span>
                    </div>
                  )}

                  {user.blog && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <BlogIcon />
                      <Link
                        href={
                          user.blog.startsWith("http")
                            ? user.blog
                            : `https://${user.blog}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {user.blog}
                      </Link>
                    </div>
                  )}

                  {user.email && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <EmailIcon />
                      <Link
                        href={`mailto:${user.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {user.email}
                      </Link>
                    </div>
                  )}

                  {user.twitter_username && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <TwitterIcon />
                      <Link
                        href={`https://twitter.com/${user.twitter_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        @{user.twitter_username}
                      </Link>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <DateIcon />
                    <span>Joined {joinDate}</span>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div>
                <h3 className="font-semibold mb-4 text-gray-900">
                  GitHub Statistics
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.value.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  View on GitHub
                </Link>

                {user.hireable && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                    Available for hire
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
