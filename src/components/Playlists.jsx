
import React from 'react'
import {useState} from 'react'

export const Playlists = () => {
const [newPlaylistName,setNewPlaylistName] = useState("")

  const {playlists,createPlaylist} = useContext(MusicContext)

const handleCreatePlaylist = () => {
if(newPlaylistName.trim()) {
    createPlaylist(newPlaylistName.trim())
    setNewPlaylistName("")
}
}
    return (
          <div className="playlists">
      <h2>Playlists</h2>

      {/* Create New Playlist */}
      <div className="create-playlist">
        <h3>Create New Playlist</h3>
        <div className="playlist-form">
          <input
            type="text"
            placeholder="Playlist name..."
            className="playlist-input"
           onChange={(e) => setNewPlaylistName(e.target.value)}
           value={newPlaylistName}
                  />
          <button className="create-btn" onClick={handleCreatePlaylist}>
            Create
          </button>
        </div>
      </div><div className="playlists-list">
        {playlists.length === 0 ? (
          <p className="empty-message">No playlists created yet</p>
        ) : (
       </div>
    )
}