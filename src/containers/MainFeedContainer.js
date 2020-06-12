import React from 'react'
import Posts from '../components/Posts.js'

class MainFeedContainer extends React.Component {
    render(){
        const {songs, userPlaylists, text, comments, likes} = this.props
        return(
            <div>
                {songs.map(song => 
                    <Posts 
                        comments={comments}
                        key={song.id} 
                        song={song} 
                        userPlaylists={userPlaylists} 
                        text={text} 
                        commentSubmitHandler={this.props.commentSubmitHandler} 
                        inputHandler={this.props.inputHandler}
                        likePost={this.props.likePost}
                        likes={likes}
                    />
                )}
            </div>
        )
    }
}

export default MainFeedContainer
