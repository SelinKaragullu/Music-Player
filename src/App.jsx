
import { AllSongs } from "./components/AllSongs";
import { Playlists } from "./components/Playlists";



import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {


  return (
    <BrowserRouter>
      <div className="app">
        <main className="app-main">
          <div className="player-section">
          </div>
          <div className="content-section">
            <Routes>
              <Route path="/" element={<AllSongs />} />
              <Route path="/playlist" element={<Playlists />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
