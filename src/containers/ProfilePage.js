import React from 'react'
import ProfilePageContainer from './ProfilePageContainer'

class ProfilePage extends React.Component {
    render(){
        // console.log(this.props.currentUser)
        // console.log(this.props.currentUserImage)
        return(
            <ProfilePageContainer currentUser={this.props.currentUser} currentUserImage={this.props.currentUserImage}/>
        )
    }
}

export default ProfilePage