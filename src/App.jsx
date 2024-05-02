import { useState } from "react";
import ModeToggler from "./components/ModeToggler";
import Content from "./components/Content";
import Customize from "./components/Customize";
import Document from "./components/Document";


function App() {
  const [mode, setMode] = useState('content');
  const [data, setData] = useState('data');

  function handleChangeData(property, value) {
    const newData = {...data, [property]: value};
    setData(newData);
  }

  function handleChangeMode(targetMode) {
    if (targetMode !== mode) {
      setMode(targetMode);
    }
  }

  return (
    <div className="app">
      <h1>CV Builder</h1>
      <ModeToggler mode={mode} onChange={handleChangeMode}/>
      {mode === "content" ? <Content data={data} handleChangeData={handleChangeData}/> : <Customize />}
      <Document data={data}/>
    </div>
  );
}

export default App;
