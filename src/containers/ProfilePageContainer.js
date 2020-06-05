import React from 'react'

class ProfilePageContainer extends React.Component {
    render(){
        
        return(
            <div>
            <h3>This is the profile page for</h3>
            <h1>{this.props.currentUser.name}</h1>
            <img src={`http://localhost:3000/${this.props.currentUserImage}`} alt={this.props.currentUser.name}/>
        </div>
        )
    }
}

export default ProfilePageContainer