import React from 'react'
import ProfilePageContainer from './ProfilePageContainer'

class ProfilePage extends React.Component {
    render(){
        const {currentUser, userSongs} = this.props
        return(
            <ProfilePageContainer currentUser={currentUser} userSongs={userSongs} updateUser={this.props.updateUser}/>
        )
    }
}

export default ProfilePage