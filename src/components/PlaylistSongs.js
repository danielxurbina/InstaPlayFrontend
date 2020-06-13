import React from 'react'
const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

class PlaylistSongs extends React.Component {

    state = {songs: []}

    componentDidMount(){
        fetch(`http://localhost:3000/songs/${this.props.playlistSongs.id}`)
        .then(response => response.json())
        .then(data =>  this.setState({songs: data.song}))
    }

    render(){
        return(
            <audio ref="audio_tag" src={this.state.songs} controls/>
        )
    }
}

export default PlaylistSongs