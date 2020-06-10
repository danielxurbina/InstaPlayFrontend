import React from 'react'
const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

class PlaylistSongs extends React.Component {

    state = {songs: []}

    componentDidMount(){
        let playlistSong = {title: this.props.playlistSongs.title}
        fetch('http://localhost:3000/song_list', {
            method: "POST",
            headers: headers,
            body: JSON.stringify(playlistSong)
        })
        .then(response => response.json())
        .then(data => this.setState({songs: data.song}))
    }

    render(){
        // console.log(this.props.playlistSongs)
        return(
            <audio ref="audio_tag" src={`http://localhost:3000/${this.state.songs}`} controls/>
        )
    }
}

export default PlaylistSongs