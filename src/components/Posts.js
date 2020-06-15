import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Comment from './Comment'
import CommentForm from './CommentForm'
import './posts.css'
import { Card, Avatar } from 'antd';
const addSongURL = "http://localhost:3000/add_song_to_playlists"
const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

class Posts extends React.Component {
    
    // this method adds a song to a playlist
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
            return  <div>
                        <div className="like-section" key="likes-icons-container" onClick={null}>
                            <div className="like-section-wrapper">
                                <i className="far fa-heart" />
                            </div>
                            <div className="like-section-wrapper">
                                <i className="far fa-comment" />
                            </div>
                        </div>
                        <p className="like-number">{filteredLikes.length} likes</p>
                    </div>
        }
    }

    render(){
        const {post_image, description, id, song} = this.props.song
        const {username} = this.props.song.user
        const {userPlaylists, text, comments} = this.props
        const filteredComments = comments.filter(comment => comment.song.id === id)
        const { Meta } = Card;
        return(
            // <div>
            //     <img src={post_image} alt={username}/>
                // <DropdownButton id="dropdown-basic-button" title="Add Song To Playlist">
                //    {userPlaylists.map(playlist => <Dropdown.Item onClick={() => this.handleClick(playlist.id, id)}>{playlist.title}</Dropdown.Item>)}
                // </DropdownButton>
            //     <h4>{username} {description}</h4>
            //     {this.checkLikes()}
            //     <audio ref="audio_tag" src={song} controls/>
            //     {filteredComments.map(comment => <Comment comment={comment} key={comment.id} songs={this.props.song}/>)}
            //     <CommentForm text={text} commentSubmitHandler={this.props.commentSubmitHandler} inputHandler={this.props.inputHandler} songID={id}/>
            // </div>
            <div className="post-border">
                <div className="post-header">
                    <div className="post-thumb-wrapper">
                        <img  className="post-thumb" src="user image goes here"/>
                    </div>
                    <h2>{username}</h2>
                    <DropdownButton id="dropdown-basic-button" title="Add Song To Playlist">
                        {userPlaylists.map(playlist => <Dropdown.Item onClick={() => this.handleClick(playlist.id, id)}>{playlist.title}</Dropdown.Item>)}
                    </DropdownButton>
                </div>
                <div className="post-image-wrapper">
                    <img alt="post thumbnail" className="post-image" src={post_image}/>
                </div>
                {this.checkLikes()}
                <div className="post-user-description">
                    <span className="user">{username}</span>
                    {' '}
                    <span className="comment">{description}</span>
                </div>
                {filteredComments.map(comment => <Comment comment={comment} key={comment.id} songs={this.props.song}/>)}
                <CommentForm text={text} commentSubmitHandler={this.props.commentSubmitHandler} inputHandler={this.props.inputHandler} songID={id}/>
          </div>
        )
    }
}

export default Posts

            
            // <div class="Instagram-card">
            //     <div class="Instagram-card-header">
            //         <img src="" class="Instagram-card-user-image"/>
            //         <a class="Instagram-card-user-name">{username}</a>
            //     </div>

            //     <div class="Instagram-card-image">
            //         <img src={post_image} height="600px"/>
            //     </div>

            //     <div class="Instagram-card-content">
            //         {this.checkLikes()}
            //         <p>
            //         <a class="Instagram-card-content-user">{username}</a> {description}
            //         </p>
            //         <p class="comments">See all 12 comments</p>
            //         {filteredComments.map(comment => <Comment comment={comment} key={comment.id} songs={this.props.song}/>)}
            //     </div>

            //     <div class="Instagram-card-footer">
            //         <CommentForm text={text} commentSubmitHandler={this.props.commentSubmitHandler} inputHandler={this.props.inputHandler} songID={id}/>
            //     </div>
            // </div>