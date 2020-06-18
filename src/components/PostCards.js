import React from 'react'
import '../styles/profile-posts.css'
import Dropdown from 'react-bootstrap/Dropdown';
import Comment from './Comment'
import CommentForm from './CommentForm'
import DropdownButton from 'react-bootstrap/DropdownButton'
const addSongURL = "http://localhost:3000/add_song_to_playlists"
const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

class PostCards extends React.Component {

    handleClick = (playlist_id, id) => {
        let addSong = {song_id: id, playlist_id: playlist_id}
        fetch(addSongURL, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(addSong)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }

    render(){
        const {post_image, description, song, id} = this.props.userSong
        const {userPlaylists, comments, text} = this.props
        const {username} = this.props.userSong.user
        const {image} = this.props.currentUser
        const filteredComments = comments.filter(comment => comment.song.id === id)
        return(
            <>
                <style type="text/css">
                    {
                        `
                            .btn-button{
                                color: white;
                            }

                            .btn-button:hover{
                                color: white;
                            }

                            .btn-button:focus{
                                outline: none !important;
                                box-shadow: none;
                            }
                        `
                    }
                </style>
                <div className="profile-page-post-border">
                    <div className="post-header">
                        <div className="post-thumb-wrapper">
                        <img  className="post-thumb" src={image}/>
                        </div>
                        <h2 className="username" >{username}</h2>
                        <DropdownButton variant="button" className="dropdown-basic-button" title="Add Song To Playlist">
                            {userPlaylists.map(playlist => <Dropdown.Item onClick={() => this.handleClick(playlist.id, id)}>{playlist.title}</Dropdown.Item>)}
                        </DropdownButton>
                    </div>
                    <div className="post-image-wrapper">
                        <img alt="post thumbnail" className="post-image" src={post_image}/>
                    </div>
                    <audio className="play" ref="audio_tag" src={song} controls/>
                    <div className="post-user-description">
                        <span className="user one">{username}</span>
                        {' '}
                        <span className="comment two">{description}</span> 
                    </div>
                    {filteredComments.map(comment => <Comment comment={comment} key={comment.id}/>)}
                    <CommentForm text={text} commentSubmitHandler={this.props.commentSubmitHandler} inputHandler={this.props.inputHandler} songID={id}/>
                </div>
            </>
        )
    }
}

export default PostCards