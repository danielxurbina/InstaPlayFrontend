import React from 'react'
const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

class PlaylistSongs extends React.Component {

    state = {songs: [], artist: "", title: ""}

    componentDidMount(){
        fetch(`http://localhost:3000/songs/${this.props.playlistSongs.id}`)
        .then(response => response.json())
        .then(data =>  this.setState({songs: data.song, artist: data.user.name, title: data.title}))
    }

    render(){
         console.log(this.state.songs)
         const{songs, artist, title} = this.state
        return(
            <div className="playlist-song-div">
                <p className="playlist-page-song-artist">{artist}</p>
                <p className="playlist-page-song-title">{title}</p>
                <audio className="playlist-audio" ref="audio_tag" src={songs} controls/>
            </div>
        )
    }
}

export default PlaylistSongs