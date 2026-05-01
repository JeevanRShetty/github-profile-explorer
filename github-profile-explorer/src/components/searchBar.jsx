import { useState, useEffect } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  // debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      if (input.trim()) {
        onSearch(input.trim());
      }
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className="search-bar">
      <input
        placeholder="Search GitHub username..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}