export const getLanguageStats = (repos) => {
  const map = {};

  repos.forEach((repo) => {
    if (!repo.language) return;
    map[repo.language] = (map[repo.language] || 0) + 1;
  });

  return Object.entries(map).map(([name, value]) => ({
    name,
    value,
  }));
};