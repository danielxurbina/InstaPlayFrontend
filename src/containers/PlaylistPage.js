import React, {useState} from 'react'
import PlaylistForm from '../components/PlaylistForm'
import PlaylistContainer from './PlaylistContainer'
import '../styles/playlist.css'

function PlaylistPage(props) {
    const [value, setValue] = useState(false);
    const {userPlaylists, currentUser} = props
    return(
        <div>
            <h1 className="container">Playlists</h1>
            <PlaylistForm 
                isOn={value} 
                handleToggle={() => setValue(!value)}  
                onColor="#EF476F"
                createPlaylistHandler={props.createPlaylistHandler} 
                currentUser={currentUser} 
            />
            <div className="container">
                <div className="grid">
                    {userPlaylists.map(userPlaylist => 
                        <PlaylistContainer 
                            userPlaylist={userPlaylist} 
                            key={userPlaylist.id} 
                            currentUser={currentUser} 
                            routerProps={props.routerProps}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
export default PlaylistPage