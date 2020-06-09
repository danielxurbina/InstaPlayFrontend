import React from 'react'
import PlaylistSongs from '../components/PlaylistSongs'
const playlistURL = "http://localhost:3000/playlists"

class Playlist extends React.Component{

    state = {description: "", playlistID: null, user: "", title: ""}

    componentDidMount(){
        fetch(`${playlistURL}/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(data => this.setState({
                description: data.description,
                playlistID: data.id,
                title: data.title,
                user: data.user.username
            })
        )
    }

    render(){
        const {description, playlistID, user, title} = this.state
        return(
            <div>
                <h3>Playlist</h3>
                <h1>{title}</h1>
                <h4>{description}</h4>
                <h4>Created By: {user}</h4>
                <PlaylistSongs />
            </div>
        )
    }
}

export default Playlist