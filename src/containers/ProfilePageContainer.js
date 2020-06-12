import React from 'react'
import PostCards from '../components/PostCards'
const usersURL = "http://localhost:3000/users"

class ProfilePageContainer extends React.Component {
    state = {isClicked: false, id: null, username: "", password: "", bio: "", background_image_url: ""}

    componentDidMount(){
        fetch(`${usersURL}/${this.props.currentUser.id}`)
        .then(response => response.json())
        .then(data => this.setState({
            id: data.id,
            username: data.username,
            password: data.password,
            bio: data.bio,
            background_image_url: data.background_image_url
        }))
    }

    toggleForm = () => {this.setState({isClicked: !this.state.isClicked})}

    handleFormChange = (event) => {this.setState({[event.target.name]: event.target.value})}

    renderEditForm = () => {
        const {username, password, bio, background_image_url} = this.state
        return(
            <form>
                <input type="text" name="username" placeholder="Username" value={username}/>
                <input type="text" name="password" placeholder="Password" value={password}/>
                <input type="text" name="bio" placeholder="Bio" value={bio}/>
                <input type="text" name="background_image_url" placeholder="Background Image" value={background_image_url}/>
                <input type="file" name="image" placeholder="Image"/>
            </form>
        )
    }

    handleSubmit = () => {

    }




    render(){
        const {userSongs, currentUser, currentUserImage} = this.props
        const {name, bio} = this.props.currentUser
        return(
            <div>
                <h1>{name}</h1>
                <p>{bio}</p>
                <img className="profile-image" src={`http://localhost:3000/${currentUserImage}`} alt={this.props.currentUser.name}/><br></br>
                {this.state.isClicked ? this.renderEditForm() : ''}
                <button onClick={this.toggleForm}>Edit Profile</button>
                {userSongs.map(userSong => <PostCards userSong={userSong} key={userSong.id} currentUser={currentUser}/>)}
            </div>
        )
    }
}

export default ProfilePageContainer