import { MusicPlayer } from "./components/MusicPlayer";
import { AllSongs } from "./components/AllSongs";
import { Playlists } from "./components/Playlists";

import { BrowserRouter, Routes, Route } from "react-router";
import { MusicProvider } from "./contexts/MusicContext";
import { Navbar } from "./components/Navbar";


function App() {

  
  return (
    <div className="app">
      <main className="app-main">
        <div className="player-section">

        </div>
        <div className="content-section">

        </div>
      </main>
    </div>
  )
}

export default App
