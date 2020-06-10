import React from 'react'
import Posts from '../components/Posts.js'

class MainFeedContainer extends React.Component {
    render(){
        const {songs, userPlaylists} = this.props
        return(
            <div>
                {songs.map(song => <Posts key={song.id} song={song} userPlaylists={userPlaylists}/>)}
            </div>
        )
    }
}

export default MainFeedContainer
