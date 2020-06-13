import React from 'react';
import {Route, Switch} from 'react-router-dom'
import axios from 'axios'
import { HomePage, MainFeed, PlaylistPage, ProfilePage, Playlists } from './containers';
import { Login, Signup, NavBar} from './components'
import './App.css';
const songsURL = "http://localhost:3000/songs"
const playlistURL = "http://localhost:3000/playlists"
const commentsURL = "http://localhost:3000/comments"
const likesURL = "http://localhost:3000/likes"
const usersURL = "http://localhost:3000/users"
const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json"
}

class App extends React.Component {

  state = {
    currentUser: null, 
    currentUserImage: null, 
    songs: [], 
    playlists: [],
    comments: [],
    likes: [],
    users: [],
    sort: "",
    text: ""
  }

  componentDidMount(){
    Promise.all([fetch(songsURL), fetch(playlistURL), fetch(commentsURL), fetch(likesURL), fetch(usersURL)])
    .then(([songsResponse, playlistResponse, commentsResponse, likesResponse, usersResponse]) => Promise.all([songsResponse.json(), playlistResponse.json(), commentsResponse.json(), likesResponse.json(), usersResponse.json()]))
    .then(([songsOBJ, playlistOBJ, commentsOBJ, likesOBJ, usersOBJ]) => this.setState({songs: songsOBJ, playlists: playlistOBJ, comments: commentsOBJ, likes: likesOBJ, users: usersOBJ}))
  }

  setCurrentUser = (data) => {this.setState({currentUser: data.user, currentUserImage: data.image})}

  logout = () => {this.setState({currentUser: null})}

  searchPosts = (event) => {this.setState({sort: event.target.value})}

  inputHandler = (event) => {this.setState({[event.target.name]: event.target.value})}

  commentSubmitHandler = (event, songID) => {
    event.preventDefault()
    let newComment = {song_id: songID, user_id: this.state.currentUser.id, text: this.state.text}

    fetch(commentsURL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(newComment)
    })
    .then(response => response.json())
    .then(data => this.setState({text: "", comments: [...this.state.comments, data]}))
  }

  submitFormHandler = (event) => {
    event.preventDefault()
    const formSongData = new FormData(event.target);

    axios.post(songsURL, formSongData)
    .then(response => this.setState({
        songs: [response.data, ...this.state.songs]
      })
    )
  }

  createPlaylist = (event) => {
    event.preventDefault()
    const formPlaylistData = new FormData(event.target)

    axios.post(playlistURL, formPlaylistData)
      .then(response => this.setState({
        playlists: [response.data, ...this.state.playlists]
      })
    )
  }

  updateUser = (data) => {
    console.log(data)
    this.setState({
      currentUser: data,
      users: this.state.users.map(user => user.id === data.id ? data : user)
    })
  }

  likePost = (event) => {
    event.preventDefault()
    let newLike = {song_id: parseInt(event.target.value), user_id: this.state.currentUser.id}

    console.log(newLike)

    fetch(likesURL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(newLike)
    })
    .then(response => response.json())
    .then(data => this.setState({likes: [...this.state.likes, data]}))
  }

  deleteLike = (event) => {
    event.preventDefault()
    fetch(`${likesURL}/${event.target.value}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(data => this.setState({likes: data}))
  }

  render(){
    const {currentUser, currentUserImage, playlists, songs, sort, text, comments, likes} = this.state

    let Songs = songs.filter(song => song.user.username.toLowerCase().includes(sort.toLowerCase()))
    let userSongs = songs.filter(song => currentUser ? song.user.id === currentUser.id ? song : null : null)
    let userPlaylists = playlists.filter(playlist => currentUser ? playlist.user.id === currentUser.id ? playlist : null : null)
    console.log(this.state.playlists)

    console.log("likes stae", this.state.likes)
    return (
      <div className="App">
        <NavBar currentUser={currentUser} logout={this.logout}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/playlists/:id" render={(props) => <Playlists {...props} routerProps={props} currentUser={currentUser}/>}/>
          <Route exact path="/login" render={(props) => <Login setCurrentUser={this.setCurrentUser} routerProps={props}/>}/>
          <Route exact path="/signup" render={(props) => <Signup updateCurrentUser={this.updateCurrentUser} routerProps={props}/>}/>
          <Route exact path="/homepage" 
            render={(props) => 
              <MainFeed 
                routerProps={props} 
                inputHandler={this.inputHandler} 
                submitFormHandler={this.submitFormHandler}
                songs={Songs}
                searchPosts={this.searchPosts}
                currentUser={currentUser}
                userPlaylists={userPlaylists}
                text={text}
                inputHandler={this.inputHandler}
                commentSubmitHandler={this.commentSubmitHandler}
                comments={comments}
                likePost={this.likePost}
                likes={likes}
                deleteLike={this.deleteLike}
              />
            }
          />
          <Route exact path="/playlists" 
            render={(props) => 
              <PlaylistPage 
                routerProps={props} 
                userPlaylists={userPlaylists} 
                currentUser={currentUser} 
                createPlaylist={this.createPlaylist}
              />
            }
          />
          <Route exact path="/profile" 
            render={() => { 
              return currentUser ? 
              (<ProfilePage currentUser={currentUser} currentUserImage={currentUserImage} userSongs={userSongs} updateUser={this.updateUser}/>) : (<Login setCurrentUser={this.setCurrentUser}/>)
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;