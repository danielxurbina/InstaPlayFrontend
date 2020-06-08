import React from 'react'
import './profile.css'
const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

class PostCards extends React.Component {

    state = {postSongs: []}

    componentDidMount(){
        if(this.props.userSong.user.id === this.props.currentUser.id){
           let song = {title: this.props.userSong.title}
           fetch('http://localhost:3000/song_list', {
                method: "POST",
                headers: headers,
                body: JSON.stringify(song)
            })
            .then(response => response.json())
            .then(data => this.setState({postSongs: data.song}))
        }
    }

    render(){
        const {post_image, description} = this.props.userSong
        const {username} = this.props.userSong.user
        return(
            <div>
                <img src={post_image} alt={username}/>
                <h3>{username} {description}</h3>
                 <audio ref="audio_tag" src={`http://localhost:3000/${this.state.postSongs}`} controls/>
            </div>
        )
    }
}

export default PostCards