import React from 'react'
import ProfilePageContainer from './ProfilePageContainer'

class ProfilePage extends React.Component {
    render(){
        const {currentUser, currentUserImage, userSongs} = this.props
        return(
            <ProfilePageContainer currentUser={currentUser} currentUserImage={currentUserImage} userSongs={userSongs}/>
        )
    }
}

export default ProfilePage