import React from 'react'
import './profile.css'

class ProfilePageContainer extends React.Component {
    render(){
        return(
            <div>
                <h1>{this.props.currentUser.name}</h1>
                <p>{this.props.currentUser.bio}</p>
                <img className="profile-image" src={`http://localhost:3000/${this.props.currentUserImage}`} alt={this.props.currentUser.name}/>
            </div>
        )
    }
}

export default ProfilePageContainer