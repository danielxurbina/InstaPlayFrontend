import React from 'react'
import PlaylistSongs from '../components/PlaylistSongs'
const playlistURL = "http://localhost:3000/playlists"

class Playlist extends React.Component{

    state = {
        isClicked: false, 
        playlist: [], 
        user: [], 
        playlistSongs: [], 
        description: "", 
        title: "",
        playlistID: null 
    }

    componentDidMount(){
        fetch(`${playlistURL}/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(data => this.setState({ playlist: data, playlistSongs: data.songs, user: data.user, playlistID: data.id}))
    }

    toggleForm = () => {this.setState({isClicked: !this.state.isClicked})}

    handleFormChange = (event) => {
        if(event.target.name === 'image'){
            this.setState({[event.target.name]: event.target.files[0]})
        }
        else {
            this.setState({[event.target.name]: event.target.value})
        }
    }

    renderEditForm = () => {
        const {description, title, playlistID} = this.state
        const {currentUser} = this.props
        return(
            <form onSubmit={(event) => this.props.updatePlaylistInfo(event, playlistID)}>
                <input type="file" name="image" />
                <input type="text" name="description" value={description} placeholder="Description" onChange={(event) => this.handleFormChange(event)}/>
                <input type="text" name="title" value={title} placeholder="Title" onChange={(event) => this.handleFormChange(event)}/>
                {currentUser ? <input type="hidden" name="user_id" value={currentUser.id}/> : null}
                <button type="submit">Submit Changes</button>
            </form>
        )
    }

    render(){
        const {playlistSongs, user} = this.state
        const {image, title, description} = this.state.playlist
        return(
            <div>
                <h3>Playlist</h3>
                <img src={image}/>
                <h1>{title}</h1>
                <h4>{description}</h4>
                <h4>Created By: {user.username}</h4>
                {this.state.isClicked ? this.renderEditForm() : ''}
                <button onClick={this.toggleForm}>Edit Playlist</button>
                <br></br>
                {playlistSongs.map(playlistSong => <PlaylistSongs key={playlistSong.id} playlistSongs={playlistSong}/>)}
            </div>
        )
    }
}

export default Playlist