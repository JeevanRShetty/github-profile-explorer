import { useState } from "react";
import SearchBar from "../components/searchBar";
import { useGithubUser } from "../hooks/useGithubUser";
import ProfileCard from "../components/profileCard";
import RepoList from "../components/repoList";
import LanguageChart from "../components/languageChart";
import { getLanguageStats } from "../utils/languageUtils";

export default function Dashboard() {
  const [username, setUsername] = useState("");
  const { data, isLoading, error } = useGithubUser(username);
  return (
  <div className="p-6 max-w-4xl mx-auto">
    <SearchBar onSearch={setUsername} />

    {isLoading && <p>Loading...</p>}
    {error && <p className="text-red-500">{error.message}</p>}

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