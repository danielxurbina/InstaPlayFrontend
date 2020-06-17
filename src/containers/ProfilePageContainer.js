import React from 'react'
import PostCards from '../components/PostCards'
import '../styles/ProfilePage.css'
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
        image: ""
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
                background_image_url: data.background_image_url,
                image: data.image
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
        const {userSongs, currentUser} = this.props
        const {name, bio, image} = this.props.currentUser
        console.log(this.props.currentUser)
        return(
            <div className="main-div">
                <div className="header">
                    <img className="profile-image" src={image} alt={name}/>
                    <h1 className="profile-name">{name}</h1>
                    <p className="profile-bio">{bio}</p>
                    <br></br>
                    {this.state.isClicked ? this.renderEditForm() : ''}
                    <button class="b1 b2 b3 b4" type="button" onClick={this.toggleForm}>Edit Profile</button>
                </div>
                {userSongs.map(userSong => <PostCards userSong={userSong} key={userSong.id} currentUser={currentUser}/>)}
            </div>
        )
    }
}

export default ProfilePageContainer
