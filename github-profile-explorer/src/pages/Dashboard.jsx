import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { useGithubUser } from "../hooks/useGithubUser";

export default function Dashboard() {
  const [username, setUsername] = useState("");
  const { data, isLoading, error } = useGithubUser(username);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <SearchBar onSearch={setUsername} />

      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error.message}</p>}

      {data && (
        <div>
          <h2 className="text-xl font-bold">{data.user.name}</h2>
          <p>{data.user.bio}</p>
        </div>
      )}
    </div>
  );
}