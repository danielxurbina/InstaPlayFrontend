import React from 'react';
import {Route, Switch} from 'react-router-dom'
import axios from 'axios'
import { HomePage, MainFeed, PlaylistPage, ProfilePage, Playlists } from './containers';
import { Login, Signup, NavBar} from './components'
import './App.css';
const songsURL = "http://localhost:3000/songs"
const playlistURL = "http://localhost:3000/playlists"

class App extends React.Component {
  
  state = {
    currentUser: null, 
    currentUserImage: null, 
    songs: [], 
    sort: "", 
    playlists: [], 
    playlistImages: []
  }

  componentDidMount(){
    Promise.all([fetch(songsURL), fetch(playlistURL)])
    .then(([songsResponse, playlistResponse]) => Promise.all([songsResponse.json(), playlistResponse.json()]))
    .then(([songsOBJ, playlistOBJ]) => this.setState({songs: songsOBJ, playlists: playlistOBJ}))
  }

  setCurrentUser = (data) => {this.setState({currentUser: data.user, currentUserImage: data.image})}

  logout = () => {this.setState({currentUser: null})}

  searchPosts = (event) => {this.setState({sort: event.target.value})}
  
  setPlaylistImages = (data) => {this.setState({playlistImages: data.image})}

  submitFormHandler = (event) => {
    event.preventDefault()
    const formSongData = new FormData(event.target);

    axios.post(songsURL, formSongData)
    .then(response => this.setState({
        songs: [response.data, ...this.state.songs]
      })
    )
  }

  render(){
    const {currentUser, currentUserImage, playlistImages, playlists, songs, sort} = this.state

    let filteredSongs = songs.filter(song => song.user.username.toLowerCase().includes(sort.toLowerCase()))
    let userSongs = songs.filter(song => currentUser ? song.user.id === currentUser.id ? song : null : null)
    let userPlaylists = playlists.filter(playlist => currentUser ? playlist.user.id === currentUser.id ? playlist : null : null)

    // console.log("playlist state", this.state.playlists)
    return (
      <div className="App">
        <NavBar currentUser={currentUser} logout={this.logout}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/playlists/:id" render={(props) => <Playlists {...props} routerProps={props} currentUser={currentUser}/>}/>
          <Route exact path="/homepage" 
            render={(props) => 
              <MainFeed 
                routerProps={props} 
                inputHandler={this.inputHandler} 
                submitFormHandler={this.submitFormHandler}
                songs={filteredSongs}
                searchPosts={this.searchPosts}
                currentUser={currentUser}
              />
            }
          />
          <Route exact path="/login" render={(props) => <Login setCurrentUser={this.setCurrentUser} routerProps={props}/>}/>
          <Route exact path="/signup" render={(props) => <Signup updateCurrentUser={this.updateCurrentUser} routerProps={props}/>}/>
          <Route exact path="/playlists" 
            render={(props) => 
              <PlaylistPage 
                routerProps={props} 
                userPlaylists={userPlaylists} 
                currentUser={currentUser} 
                setPlaylistImages={this.setPlaylistImages} 
                playlistImages={playlistImages}
              />
            }
          />
          <Route exact path="/profile" 
            render={() => { 
              return currentUser ? 
              (
                <ProfilePage currentUser={currentUser} currentUserImage={currentUserImage} userSongs={userSongs}/>
              ) : 
              (
                <Login setCurrentUser={this.setCurrentUser}/>
              )
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;