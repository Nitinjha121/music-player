import React from 'react';

function LibrarySong({song, setCurrentSong, songs, isPlaying,  audioRef}) {

    

    const songSelectHandler = async function(){
        songs.map(song=>song.active=false)
        // const selectedSong = songs.filter(setSong=>setSong.id === song.id);
      const selectedSong = song;
      selectedSong.active = true;
      await setCurrentSong(selectedSong);
      if(isPlaying) audioRef.current.play();
    }

    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active?"selected":""}`}>
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artists}</h4>
            </div>
        </div>
    )
}

export default LibrarySong
