import { useState } from "react";
import ModeToggler from "./components/ModeToggler";
import Content from "./components/Content";
import Customize from "./components/Customize";
import Document from "./components/Document";


function App() {
  const [mode, setMode] = useState("content");

  function handleChange(targetMode) {
    if (targetMode !== mode) {
      setMode(targetMode);
    }
  }

  return (
    <div className="app">
      <ModeToggler mode={mode} onChange={handleChange}/>
      {mode === "content" ? <Content /> : <Customize />}
      <Document />
    </div>
  );
}

export default App;
