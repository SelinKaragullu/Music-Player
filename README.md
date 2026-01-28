# 🎵 React Music Player

A modern, responsive, and feature-rich web-based music player application. Users can browse a complete song library, create custom playlists, and enjoy a seamless playback experience with client-side routing.

[🎧 **Live Demo**](https://music-play-err.netlify.app/)

![Music Player Demo](./screenshot.gif)

## ✨ Features

* **Global Music Context:** Seamless state management allowing music to play uninterrupted while navigating pages.
* **Custom Playlists:** Users can **create**, **name**, and **delete** their own playlists.
* **Smart Search & Add:** Dynamic search functionality to find and add specific songs to playlists instantly.
* **Playback Controls:** Play, Pause, Next, Previous, and a draggable progress bar.
* **Page Routing:** Dedicated views for "All Songs" and "Playlists" managed via React Router.
* **Auto-Play:** Automatically plays the next track when the current song ends.

## 🛠 Built With

* **React** (Functional Components & Hooks)
    * `useContext`: For global state management (MusicContext).
    * `useRef`: To directly manipulate the HTML5 Audio element.
    * `useEffect`: For handling side effects like audio events and progress synchronization.
    * `useState`: For local UI states (forms, search inputs).
* **React Router** (`react-router-dom`): For smooth navigation between the Library and Playlist views without reloading the page.
* **React Context API**: Replaces prop-drilling to manage current track, playing status, and playlist data globally.
* **HTML5 Audio API**: The core engine behind the music playback, managed via React Refs.
* **CSS3**: Custom styling for a responsive and aesthetic layout.

## 🧠 Challenges & Learnings

Building this project significantly improved my React architecture skills:
* **Context API Implementation:** I moved away from "Prop Drilling" and implemented a `MusicContext` to make the player state (current song, isPlaying) accessible throughout the entire app.
* **DOM Manipulation in React:** Learned to bridge the gap between React's virtual DOM and the browser's actual `<audio>` tag using `useRef` to handle play/pause and time updates programmatically.
* **Complex Array Manipulation:** Implemented logic to filter the `allSongs` array based on user search input and prevent duplicate songs from being added to playlists.
* **Routing logic:** Used `react-router-dom` to highlight active navigation links and render different views while keeping the `MusicPlayer` component persistent at the bottom.

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
