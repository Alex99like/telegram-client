import React, {useEffect} from 'react';
import './App.scss'
//@ts-ignore
const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
