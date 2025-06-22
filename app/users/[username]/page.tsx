import { Suspense } from "react";
import { notFound } from "next/navigation";
import UserProfile from "@/components/user-profile";
import { getUser } from "@/service/github";
import Link from "next/link";
import UserProfileSkeleton from "@/components/skeleton/user-profile";
import LeftArrowIcon from "@/public/icon/LeftArrowIcon";

interface UserPageProps {
  params: Promise<{ username: string }>;
}

export default async function UserPage({ params }: UserPageProps) {
  const { username } = await params;

  try {
    const user = await getUser(username);

    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <LeftArrowIcon className="w-4 h-4 mr-2" />
            Back to Users
          </Link>
        </div>

        <Suspense fallback={<UserProfileSkeleton />}>
          <UserProfile user={user} />
        </Suspense>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
