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
                    submitFormHandler={this.props.submitFormHandler}
                    currentUser={currentUser}
                />
                <MainFeedContainer 
                    comments={comments}
                    songs={songs} 
                    userPlaylists={userPlaylists} 
                    text={text} 
                    commentSubmitHandler={this.props.commentSubmitHandler} 
                    inputHandler={this.props.inputHandler}
                    likePost={this.props.likePost}
                    likes={likes}
                />
            </div>
        )
    }
}

export default MainFeed