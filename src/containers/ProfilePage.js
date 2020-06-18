import React from 'react'
import ProfilePageContainer from './ProfilePageContainer'

class ProfilePage extends React.Component {
    render(){
        const {currentUser, userSongs, userPlaylists, comments, text} = this.props
        return(
            <ProfilePageContainer 
                userPlaylists={userPlaylists} 
                comments={comments} 
                currentUser={currentUser} 
                userSongs={userSongs} 
                updateUser={this.props.updateUser}
                text={text}
                commentSubmitHandler={this.props.commentSubmitHandler}
                inputHandler={this.props.inputHandler}
            />
        )
    }
}

export default ProfilePage