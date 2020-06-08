import React from 'react'
import Posts from '../components/Posts.js'

class MainFeedContainer extends React.Component {
    render(){
        // console.log(this.props.songs)
        const {songs} = this.props
        return(
            <div>
                {songs.map(song => <Posts key={song.id} song={song}/>)}
            </div>
        )
    }
}

export default MainFeedContainer