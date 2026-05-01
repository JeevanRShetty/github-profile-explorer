export default function RepoList({ repos }) {
  const sortedRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10);

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Top Repositories</h3>

      <div className="grid md:grid-cols-2 gap-4">
        {sortedRepos.map((repo) => (
          <div
            key={repo.id}
            className="p-4 border rounded-lg hover:shadow transition"
          >
            <h4 className="font-bold">{repo.name}</h4>

            {repo.description && (
              <p className="text-sm text-gray-600 mt-1">
                {repo.description}
              </p>
            )}

            <div className="flex justify-between mt-3 text-sm">
              <span>⭐ {repo.stargazers_count}</span>
              <span>{repo.language}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}