import React from 'react';
import LibrarySong from "./LibrarySong";


function Library({ songs, setCurrentSong, libraryStatus, isPlaying, audioRef}) {
    return (
        <div className={`library ${libraryStatus?"active-library":""}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => <LibrarySong 
                                    songs={songs} 
                                    setCurrentSong={setCurrentSong} 
                                    song={song}
                                    isPlaying={isPlaying}
                                    audioRef={audioRef}
                                    key={song.id}/>
                            )}
           
            </div>
        </div>
    )
}

export default Library;
