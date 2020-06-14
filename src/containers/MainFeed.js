import React from 'react'
import MainFeedForm from '../components/MainFeedForm.js'
import Search from '../components/Search.js'
import MainFeedContainer from './MainFeedContainer.js'

class MainFeed extends React.Component {
    render(){
        const {songs, currentUser, userPlaylists, text, comments, likes} = this.props
        return(
            <div>
                <Search searchPosts={this.props.searchPosts}/>
                <MainFeedForm 
                    inputHandler={this.props.inputHandler}
                    songSubmitHandler={this.props.songSubmitHandler}
                    currentUser={currentUser}
                />
                <MainFeedContainer 
                    songs={songs} 
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
            </div>
        )
    }
}

export default MainFeed