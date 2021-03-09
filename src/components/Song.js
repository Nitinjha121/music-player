import React from "react";

function Song({ currentSong }) {
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt={currentSong.name} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artists}</h3>
    </div>
  );
}

export default Song;
