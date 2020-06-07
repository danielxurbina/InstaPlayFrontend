import React from 'react';
import {Route, Switch} from 'react-router-dom'
import { HomePage, MainFeed, PlaylistPage, ProfilePage } from './containers';
import { Login, Signup, NavBar } from './components'
import './App.css';
const postsURL = "http://localhost:3000/posts"
const songsURL = "http://localhost:3000/songs"
const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json"
}

class App extends React.Component {
  state = {
    currentUser: null, 
    currentUserImage: null, 
    songs: [],
    posts: [],
    description: "", 
    image_url: "", 
    sort: ""
  }

  componentDidMount(){
    Promise.all([fetch(postsURL), fetch(songsURL)])
    .then(([postsResponse, songsResponse]) => Promise.all([postsResponse.json(), songsResponse.json()]))
    .then(([postsOBJ, songsOBJ]) => this.setState({posts: postsOBJ, songs: songsOBJ}))
  }

  setCurrentUser = (data) => {this.setState({currentUser: data.user, currentUserImage: data.image})}

  logout = () => {this.setState({currentUser: null})}

  inputHandler = (event) => {this.setState({[event.target.name]: event.target.value})}

  searchPosts = (event) => {this.setState({sort: event.target.value})}

  submitFormHandler = (event) => {
    event.preventDefault()
    const newPost = {
      user_id: this.state.currentUser.id, 
      song_id: this.state.songs.length + 1,
      description: this.state.description,
      image_url: this.state.image_url
    }
    fetch(postsURL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(newPost)
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }

  uploadSongFile = (file, id) => {

  }

  render(){
    console.log(this.state.currentUser)
    // console.log("posts state", this.state.posts)
    console.log("songs state", this.state.songs.length)
    const {currentUser, currentUserImage, songs, description, image_url, posts} = this.state
    return (
      <div className="App">
        <NavBar currentUser={currentUser} logout={this.logout}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/homepage" render={(props) => 
            <MainFeed 
              routerProps={props} 
              inputHandler={this.inputHandler} 
              submitFormHandler={this.submitFormHandler}
              songs={songs}
              description={description}
              image_url={image_url}
              searchPosts={this.searchPosts}
              posts={posts}
            />}
          />
          <Route exact path="/login" render={(props) => <Login setCurrentUser={this.setCurrentUser} routerProps={props}/>}/>
          <Route exact path="/signup" render={(props) => <Signup updateCurrentUser={this.updateCurrentUser} routerProps={props}/>}/>
          <Route exact path="/playlists" component={PlaylistPage}/>
          <Route exact path="/profile" render={() => { return currentUser ? 
            (<ProfilePage currentUser={currentUser} currentUserImage={currentUserImage}/>) 
            : (<Login setCurrentUser={this.setCurrentUser}/>)}}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
