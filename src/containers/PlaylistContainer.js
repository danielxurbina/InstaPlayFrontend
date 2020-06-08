import React, {useState} from 'react'
import PlaylistForm from '../components/PlaylistForm'
import Playlists from './Playlists'

function PlaylistContainer() {
        const [value, setValue] = useState(false);
        return(
            <div>
                Playlists
                <PlaylistForm isOn={value} handleToggle={() => setValue(!value)}  onColor="#EF476F"/>
                <Playlists />
            </div>
        )
}

export default PlaylistContainer