import React from 'react'
import Posts from '../components/Posts.js'

class MainFeedContainer extends React.Component {
    render(){
        const {songs, userPlaylists, text, comments, likes, currentUser} = this.props
        return(
            <div className="posts-container-wrapper">
                {songs.map(song => 
                    <Posts 
                        key={song.id} 
                        song={song} 
                        currentUser={currentUser}
                        userPlaylists={userPlaylists} 
                        text={text} 
                        commentSubmitHandler={this.props.commentSubmitHandler} 
                        inputHandler={this.props.inputHandler}
                        likePost={this.props.likePost}
                        likes={likes}
                        comments={comments}
                        deleteLike={this.props.deleteLike}
                    />
                )}
            </div>
        )
    }
}

export default MainFeedContainer
