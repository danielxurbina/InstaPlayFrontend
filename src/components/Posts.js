import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
const addSongURL = "http://localhost:3000/add_song_to_playlists"
const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

class Posts extends React.Component {

    state = {postSongs: []}

    componentDidMount(){
       let song = {title: this.props.song.title}
       fetch('http://localhost:3000/song_list', {
            method: "POST",
            headers: headers,
            body: JSON.stringify(song)
        })
        .then(response => response.json())
        .then(data => this.setState({postSongs: data.song}))
    }

    handleClick = (playlist_id, id) => {
        let addSong = {song_id: id, playlist_id: playlist_id}
        // console.log(addSong)
        fetch(addSongURL, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(addSong)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }

    render(){
        const {post_image, description, id} = this.props.song
        const {username} = this.props.song.user
        const {userPlaylists} = this.props
        return(
            <div>
                <img src={post_image} alt={username}/>
                <DropdownButton id="dropdown-basic-button" title="Add Song To Playlist">
                    {userPlaylists.map(playlist => <Dropdown.Item onClick={() => this.handleClick(playlist.id, id)}>{playlist.title}</Dropdown.Item>)}
                </DropdownButton>
                <h4>{username} {description}</h4>
                <audio ref="audio_tag" src={`http://localhost:3000/${this.state.postSongs}`} controls/>
            </div>
        )
    }
}

export default Posts