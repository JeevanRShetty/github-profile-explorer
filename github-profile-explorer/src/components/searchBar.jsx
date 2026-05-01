import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  return (
    <div className="flex gap-2 mb-4">
      <input
        className="p-2 border rounded w-full"
        placeholder="Enter GitHub username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => onSearch(input)}
        className="bg-blue-500 text-white px-4 rounded"
      >
        Search
      </button>
    </div>
  );
}