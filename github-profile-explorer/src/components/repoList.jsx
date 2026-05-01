import "./RepoList.css";

export default function RepoList({ repos }) {
  const sorted = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10);

  return (
    <div className="repo-grid">
      {sorted.map((repo) => (
        <div key={repo.id} className="repo-card">
          <h4>{repo.name}</h4>
          <p>{repo.description}</p>
          <div>⭐ {repo.stargazers_count}</div>
        </div>
      ))}
    </div>
  );
}