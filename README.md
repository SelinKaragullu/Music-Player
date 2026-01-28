# 🎵 React Music Player

A modern, responsive, and aesthetic web-based music player application. Users can browse a library of songs, play/pause tracks, and skip between songs with a smooth user interface.

[🎧 **Live Demo**](https://music-play-err.netlify.app/)

![Music Player Demo](./screenshot.gif)
## ✨ Features

* **Playback Controls:** Play, Pause, Skip Forward, and Skip Backward.
* **Song Library:** A toggleable library to select and switch between different tracks.
* **Real-time Progress Bar:** Visual indicator of song duration and current time (drag to seek).
* **Responsive UI:** Optimized for both mobile and desktop views.
* **Auto-Play:** Automatically plays the next song when the current one ends.

## 🛠 Built With

* **React** (Functional Components & Hooks)
* **HTML5 Audio API** (Managed via React Refs)
* **SASS / CSS3** (For styling and animations)
* **FontAwesome** (For icons)
* **UUID** (For unique ID generation)

## 🧠 Challenges & Learnings

Building this project improved my understanding of:
* **`useRef` Hook:** Used to directly reference and control the HTML `<audio>` element for play/pause functionality.
* **State Lifting:** Managing the current song state in the parent component (`App.js`) to share data between the `Player` and `Library` components.
* **Synchronizing State:** Keeping the UI (progress bar) in sync with the actual audio current time.
* **CSS Animations:** Rotating animations for the album art when music is playing.

## 💻 Installation

To run this project locally:

```bash
# 1. Clone the repository
git clone [https://github.com/YOUR_USERNAME/music-player.git](https://github.com/YOUR_USERNAME/music-player.git)

# 2. Navigate to the project directory
cd music-player

# 3. Install dependencies
npm install

# 4. Start the application
npm start
