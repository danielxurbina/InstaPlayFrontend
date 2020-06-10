import React from 'react'
import MainFeedForm from '../components/MainFeedForm.js'
import Search from '../components/Search.js'
import MainFeedContainer from './MainFeedContainer.js'

class MainFeed extends React.Component {
    render(){
        const {songs, currentUser, userPlaylists} = this.props
        return(
            <div>
                <Search searchPosts={this.props.searchPosts}/>
                <MainFeedForm 
                    inputHandler={this.props.inputHandler}
                    submitFormHandler={this.props.submitFormHandler}
                    currentUser={currentUser}
                />
                <MainFeedContainer songs={songs} userPlaylists={userPlaylists}/>
            </div>
        )
    }
}

export default MainFeed