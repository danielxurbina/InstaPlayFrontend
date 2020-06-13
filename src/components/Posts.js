import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Comment from './Comment'
import CommentForm from './CommentForm'
const addSongURL = "http://localhost:3000/add_song_to_playlists"
const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

class Posts extends React.Component {

    state = {postSongs: []}

    componentDidMount(){
        this.getPostSongs()
    }

    // this method is to get the songs of the post
    getPostSongs = () => {
        let song = {title: this.props.song.title}
        fetch('http://localhost:3000/song_list', {
             method: "POST",
             headers: headers,
             body: JSON.stringify(song)
         })
         .then(response => response.json())
         .then(data => this.setState({postSongs: data.song}))
    }

    // this method adds a song to a playlist
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

    checkLikes = () => {
        const {id} = this.props.song
        const filteredLikes = this.props.likes.filter(like => like.song.id === id)
       
        if(this.props.currentUser){
            const currentLike = filteredLikes.filter(like => like.user.id === this.props.currentUser.id)
            if(currentLike.length > 0){
                return <h4>Likes: {filteredLikes.length} <button className="likeButton" value={currentLike[0].id} onClick={(event) => this.props.deleteLike(event)}>❤️</button></h4>
            }
            else {
                return <h4>Likes: {filteredLikes.length} <button className="likeButton" value={id} onClick={(event) => this.props.likePost(event)}>❤️</button> </h4>
            }
        }
        else {
           return <h4>Likes: {filteredLikes.length} </h4>
        }
    }

    render(){
        const {post_image, description, id} = this.props.song
        const {username} = this.props.song.user
        const {userPlaylists, text, comments, likes} = this.props
        const filteredComments = comments.filter(comment => comment.song.id === id)
        return(
            <div>
                <img src={post_image} alt={username}/>
                <DropdownButton id="dropdown-basic-button" title="Add Song To Playlist">
                   {userPlaylists.map(playlist => <Dropdown.Item onClick={() => this.handleClick(playlist.id, id)}>{playlist.title}</Dropdown.Item>)}
                </DropdownButton>
                <h4>{username} {description}</h4>
                {this.checkLikes()}
                <audio ref="audio_tag" src={`http://localhost:3000/${this.state.postSongs}`} controls/>
                {filteredComments.map(comment => <Comment comment={comment} key={comment.id} songs={this.props.song}/>)}
                <CommentForm text={text} commentSubmitHandler={this.props.commentSubmitHandler} inputHandler={this.props.inputHandler} songID={id}/>
            </div>
        )
    }
}

export default Posts