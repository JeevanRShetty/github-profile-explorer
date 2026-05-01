import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

// Handle rate limit errors
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 403) {
      throw new Error("GitHub API rate limit exceeded");
    }
    throw err;
  }
);

export const fetchUser = async (username) => {
  const { data } = await api.get(`/users/${username}`);
  return data;
};

export const fetchRepos = async (username) => {
  const { data } = await api.get(`/users/${username}/repos?per_page=100`);
  return data;
};