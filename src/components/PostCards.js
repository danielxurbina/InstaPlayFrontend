import React from 'react'
import '../styles/profile.css'
const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

class PostCards extends React.Component {
    render(){
        const {post_image, description, song} = this.props.userSong
        const {username} = this.props.userSong.user
        return(
            <div>
                <img src={post_image} alt={username}/>
                <h3>{username} {description}</h3>
                 <audio ref="audio_tag" src={song} controls/>
            </div>
        )
    }
}

export default PostCards