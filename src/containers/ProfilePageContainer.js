import React from 'react'
import PostCards from '../components/PostCards'

class ProfilePageContainer extends React.Component {
    render(){
        const {userSongs, currentUser, currentUserImage} = this.props
        const {name, bio} = this.props.currentUser
        return(
            <div>
                <h1>{name}</h1>
                <p>{bio}</p>
                <img className="profile-image" src={`http://localhost:3000/${currentUserImage}`} alt={this.props.currentUser.name}/>
                {userSongs.map(userSong => <PostCards userSong={userSong} key={userSong.id} currentUser={currentUser}/>)}
            </div>
        )
    }
}

export default ProfilePageContainer