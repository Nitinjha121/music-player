import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

function Player({ currentSong, timeUpdateHandler, setCurrentSong, isPlaying, songInfo, setSongInfo, audioRef, playSongHandler, songs }) {

  const getTime = (time) => Math.floor(time / 60) + ":" + String(Math.floor(time % 60)).padStart(2, 0);

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo, currentTime: e.target.value});
  }

  const skipTrackHandler = async (direction) => {
    
    let  currentIndex = songs.findIndex(song=>song.id===currentSong.id);
    
    songs.map(song=>song.active=false)
    
    const songChanging = function (val) {
      const activeSong = songs[val];
      activeSong.active=true;
      setCurrentSong(activeSong);
    }
    
    if(direction==="skip-back"){
     await songChanging((songs.length + (currentIndex - 1))%songs.length);
    }
    if(direction==="skip-forward"){
     await songChanging((currentIndex+1)%songs.length);
    }
    if(isPlaying) audioRef.current.play();
    
    // playAudio(isPlaying, audioRef);
  }

  const trackAnim = {
    transform:`translateX(${songInfo.animationPercentage}%)`
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div style={{background:`linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track">
        <input onChange={dragHandler} min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type="range" />
        <div style={trackAnim} className="animated-track"> </div>
        </div>
        <p>{songInfo.duration?getTime(songInfo.duration):"0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon onClick={()=> skipTrackHandler("skip-back")} className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying?faPause:faPlay}
        />
        <FontAwesomeIcon
        onClick={()=> skipTrackHandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
     
    </div>
  );
}

export default Player;
