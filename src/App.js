import React, { useState, useRef } from "react";
import "./styles/app.scss";
import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import data from "./data";

function App() {
  //State
  const [songs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  const [libraryStatus, setLibraryStatus] = useState(false);
  
    //Refrence of html elements
    const audioRef = useRef(null);
    //Event Handlers
    const playSongHandler = (e) => {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(!isPlaying);
      } else {
        audioRef.current.play();
        setIsPlaying(!isPlaying);
      }
    };

    const timeUpdateHandler = (e) => {
      const current = e.target.currentTime;
      const duration = e.target.duration;

      const roundCurrent = Math.round(current);
      const roundDuration = Math.round(duration);
      const animationPercentage = Math.round(roundCurrent*100/roundDuration);
      
      setSongInfo({ ...songInfo, currentTime: current, duration, animationPercentage });
    };

    const songEndedHandler = async function(){
      let  currentIndex = songs.findIndex(song=>song.id===currentSong.id);
      
      const songChanging = function (val) {
        songs.map(song=>song.active=false);
        const activeSong = songs[val];
        activeSong.active=true;
        setCurrentSong(activeSong);
      }

      await songChanging((currentIndex+1)%songs.length);
      if(isPlaying) audioRef.current.play();
    }

  return (
    <div className={`App ${libraryStatus? "library-active":""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        currentSong={currentSong}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        playSongHandler={playSongHandler}
        songs={songs}
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
      />
      <Library isPlaying={isPlaying} audioRef={audioRef} libraryStatus={libraryStatus} songs={songs} setCurrentSong={setCurrentSong}/>

      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndedHandler}
      ></audio>
    </div>
  );
}

export default App;
