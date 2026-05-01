import { useQuery } from "@tanstack/react-query";
import { fetchUser, fetchRepos } from "../api/githubApi";

export const useGithubUser = (username) => {
  return useQuery({
    queryKey: ["githubUser", username],
    queryFn: async () => {
      const [user, repos] = await Promise.all([
        fetchUser(username),
        fetchRepos(username),
      ]);
      return { user, repos };
    },
    enabled: !!username,
  });
};