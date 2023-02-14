import React, {useEffect} from 'react';
import './App.scss'
import {Header} from "../components/Header/Header";
//@ts-ignore
const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
