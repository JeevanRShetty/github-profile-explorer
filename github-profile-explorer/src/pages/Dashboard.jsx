import { useState } from "react";
import SearchBar from "../components/searchBar";
import { useGithubUser } from "../hooks/useGithubUser";
import ProfileCard from "../components/profileCard";
import RepoList from "../components/repoList";
import LanguageChart from "../components/languageChart";
import { getLanguageStats } from "../utils/languageUtils";
import SkeletonLoader from "../components/SkeletonLoader";

export default function Dashboard() {
  const [username, setUsername] = useState("");
  const { data, isLoading, error } = useGithubUser(username);
  return (
  <div className="p-6 max-w-4xl mx-auto">
    <SearchBar onSearch={setUsername} />

    {isLoading && <SkeletonLoader />}
    {error && (
  <div className="mt-4 p-4 bg-yellow-100 text-yellow-800 rounded">
    {error.message.includes("rate limit")
      ? "⚠️ GitHub API rate limit exceeded. Try again later."
      : error.message}
  </div>
)}
   

    {data && (
      <>
        <ProfileCard user={data.user} />
        <RepoList repos={data.repos} />
        <LanguageChart data={getLanguageStats(data.repos)} />
      </>
    )}
  </div>
);

}