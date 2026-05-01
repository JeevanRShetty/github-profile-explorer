export default function ProfileCard({ user }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 flex gap-6 items-center">
      <img
        src={user.avatar_url}
        alt="avatar"
        className="w-20 h-20 rounded-full"
      />

      <div>
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p className="text-gray-500">@{user.login}</p>

        {user.bio && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {user.bio}
          </p>
        )}

        <div className="flex gap-4 mt-3 text-sm">
          <span>👥 {user.followers} followers</span>
          <span>📦 {user.public_repos} repos</span>
        </div>
      </div>
    </div>
  );
}