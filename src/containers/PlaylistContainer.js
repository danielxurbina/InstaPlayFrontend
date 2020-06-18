import React from 'react'
import '../styles/playlist.css'

class PlaylistContainer extends React.Component{
    render(){
        const {title, id, image} = this.props.userPlaylist
        return(
          <div className="gridItem" style={{backgroundImage: `url(${image})`}} onClick={() => this.props.routerProps.history.push(`/playlists/${id}`)}>
                <h1 className="playlist-title">{title}</h1>
          </div>

        )
    }
}

export default PlaylistContainer