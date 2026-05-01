import { useState } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [dark, setDark] = useState(false);

return (
  <div className={dark ? "dark" : ""}>
    <button onClick={() => setDark(!dark)}>
      Toggle Mode
    </button>

    <Dashboard />
  </div>
);

}

export default App;