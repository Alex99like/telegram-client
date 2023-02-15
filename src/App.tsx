import React, {useEffect} from 'react';
import './App.scss'
import {Header} from "./components/Header/Header";
import {useTelegram} from "../hooks/useTelegram";

function App() {
  const { tg, onToggleButton } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
