import React from 'react'
import PostCards from '../components/PostCards'
import axios from 'axios'
const usersURL = "http://localhost:3000/users"

class ProfilePageContainer extends React.Component {
    state = {
        isClicked: false, 
        id: null, 
        name: "", 
        username: "", 
        password: "", 
        bio: "", 
        background_image_url: "", 
        image: {}
    }

    componentDidMount(){
        fetch(`${usersURL}/${this.props.currentUser.id}`)
        .then(response => response.json())
        .then(data => this.setState({
                id: data.id,
                name: data.name,
                username: data.username,
                password: data.password,
                bio: data.bio,
                background_image_url: data.background_image_url
            })
        )
    }

    toggleForm = () => {this.setState({isClicked: !this.state.isClicked})}

    handleFormChange = (event) => {
        if(event.target.name === 'image'){
            this.setState({[event.target.name]: event.target.files[0]})
        }
        else {
            this.setState({[event.target.name]: event.target.value})
        }
    }

    renderEditForm = () => {
        const {name, username, password, bio, background_image_url} = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={name} placeholder="Name" onChange={(event) => this.handleFormChange(event)}/>
                <input type="text" name="username" value={username} placeholder="Username" onChange={(event) => this.handleFormChange(event)}/>
                <input type="text" name="password" value={password} placeholder="Password" onChange={(event) => this.handleFormChange(event)}/>
                <input type="text" name="bio" value={bio} placeholder="Bio" onChange={(event) => this.handleFormChange(event)}/>
                <input type="text" name="background_image_url" value={background_image_url} placeholder="Background Image" onChange={(event) => this.handleFormChange(event)}/>
                <input type="file" name="image"/>
                <button type="submit">Submit Changes</button>
            </form>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const formProfileData = new FormData(event.target)

        axios.patch(`${usersURL}/${this.state.id}`, formProfileData)
        .then(response => this.props.updateUser(response.data))
    }

    render(){
        const {userSongs, currentUser, currentUserImage} = this.props
        const {name, bio} = this.props.currentUser
        return(
            <div>
                <h1>{name}</h1>
                <p>{bio}</p>
                <img className="profile-image" src={`http://localhost:3000/${currentUserImage}`} alt={this.props.currentUser.name}/>
                <br></br>
                {this.state.isClicked ? this.renderEditForm() : ''}
                <button onClick={this.toggleForm}>Edit Profile</button>
                {userSongs.map(userSong => <PostCards userSong={userSong} key={userSong.id} currentUser={currentUser}/>)}
            </div>
        )
    }
}

export default ProfilePageContainer