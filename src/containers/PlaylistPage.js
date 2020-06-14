import React, {useState} from 'react'
import PlaylistForm from '../components/PlaylistForm'
import PlaylistContainer from './PlaylistContainer'

function PlaylistPage(props) {
    const [value, setValue] = useState(false);
    const {userPlaylists, currentUser} = props
    return(
        <div>
            <h1>Playlists</h1>
            <PlaylistForm 
                isOn={value} 
                handleToggle={() => setValue(!value)}  
                onColor="#EF476F"
                createPlaylistHandler={props.createPlaylistHandler} 
                currentUser={currentUser} 
            />
            {userPlaylists.map(userPlaylist => <PlaylistContainer userPlaylist={userPlaylist} key={userPlaylist.id} currentUser={currentUser} routerProps={props.routerProps}/>)}
        </div>
    )
}
export default PlaylistPage