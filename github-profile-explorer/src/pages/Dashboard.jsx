import { useState } from "react";
import SearchBar from "../components/searchBar";
import { useGithubUser } from "../hooks/useGithubUser";
import ProfileCard from "../components/profileCard";
import RepoList from "../components/repoList";
import LanguageChart from "../components/languageChart";
import { getLanguageStats } from "../utils/languageUtils";
import SkeletonLoader from "../components/SkeletonLoader";
import "./Dashboard.css";

export default function Dashboard() {
  const [username, setUsername] = useState("");
  const { data, isLoading, error } = useGithubUser(username);
return (
  <div className="dashboard">
    <div className="search-wrapper">
      <SearchBar onSearch={setUsername} />
    </div>

    {isLoading && <SkeletonLoader />}

    {error && (
      <div className="error-box">
        {error.message.includes("rate limit")
          ? "⚠️ GitHub API rate limit exceeded. Try again later."
          : error.message}
      </div>
    )}

    {data && (
      <>
        <div className="section">
          <ProfileCard user={data.user} />
        </div>

        <div className="section">
          <RepoList repos={data.repos} />
        </div>

        <div className="section">
          <LanguageChart data={getLanguageStats(data.repos)} />
        </div>
      </>
    )}
  </div>
);

}