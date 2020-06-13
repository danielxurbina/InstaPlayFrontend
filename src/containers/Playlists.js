import React from 'react'
import PlaylistSongs from '../components/PlaylistSongs'
const playlistURL = "http://localhost:3000/playlists"

class Playlist extends React.Component{

    state = {description: "", user: "", title: "", playlistSongs: [], image: ""}

    componentDidMount(){
        fetch(`${playlistURL}/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(data => 
            this.setState({
                description: data.description,
                user: data.user,
                title: data.title,
                playlistSongs: data.song,
                image: data.image
            })
        )
    }

    render(){
        const {description, user, title, playlistSongs, image} = this.state
        console.log(this.state)
        return(
            <div>
                <h3>Playlist</h3>
                <img src={image}/>
                <h1>{title}</h1>
                <h4>{description}</h4>
                <h4>Created By: {user.username}</h4>
                {playlistSongs.map(playlistSong => <PlaylistSongs key={playlistSong.id} playlistSongs={playlistSong}/>)}
            </div>
        )
    }
}

export default Playlist