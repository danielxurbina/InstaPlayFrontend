import React from 'react';
import {Route, Switch} from 'react-router-dom'
import axios from 'axios'
import { HomePage, MainFeed, PlaylistPage, ProfilePage } from './containers';
import { Login, Signup, NavBar } from './components'
import './App.css';
const songsURL = "http://localhost:3000/songs"

class App extends React.Component {
  state = {currentUser: null, currentUserImage: null, songs: [],sort: ""}

  componentDidMount(){
    Promise.all([fetch(songsURL)])
    .then(([songsResponse]) => Promise.all([songsResponse.json()]))
    .then(([songsOBJ]) => this.setState({songs: songsOBJ}))
  }

  setCurrentUser = (data) => {this.setState({currentUser: data.user, currentUserImage: data.image})}

  logout = () => {this.setState({currentUser: null})}

  searchPosts = (event) => {this.setState({sort: event.target.value})}

  submitFormHandler = (event) => {
    event.preventDefault()
    const formSongData = new FormData(event.target);
    axios.post(songsURL, formSongData).then(response => this.setState({songs: [response.data, ...this.state.songs]}))
  }

  render(){
    const {currentUser, currentUserImage, songs} = this.state
    let filteredSongs = this.state.songs.filter(song => song.user.username.toLowerCase().includes(this.state.sort.toLowerCase()))
    let userSongs = this.state.songs.filter(song => this.state.currentUser ? song.user.id === this.state.currentUser.id ? song : null : null)
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
              songs={filteredSongs}
              searchPosts={this.searchPosts}
              currentUser={currentUser}
            />
          }/>
          <Route exact path="/login" render={(props) => <Login setCurrentUser={this.setCurrentUser} routerProps={props}/>}/>
          <Route exact path="/signup" render={(props) => <Signup updateCurrentUser={this.updateCurrentUser} routerProps={props}/>}/>
          <Route exact path="/playlists" render={(props) => <PlaylistPage routerProps={props} />}/>
          <Route exact path="/profile" render={() => { return currentUser ? 
            (<ProfilePage currentUser={currentUser} currentUserImage={currentUserImage} userSongs={userSongs}/>) 
            : (<Login setCurrentUser={this.setCurrentUser}/>)}}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
