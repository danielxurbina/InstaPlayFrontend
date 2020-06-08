import React from 'react'
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

    render(){
        const {post_image, description} = this.props.song
        const {username} = this.props.song.user
        return(
            <div>
                <img src={post_image} alt={username}/>
                <h3>{username} {description}</h3>
                <audio ref="audio_tag" src={`http://localhost:3000/${this.state.postSongs}`} controls/>
            </div>
        )
    }
}

export default Posts