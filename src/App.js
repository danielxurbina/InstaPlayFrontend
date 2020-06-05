import React from 'react';
import {Route, Switch} from 'react-router-dom'
import { HomePage, MainFeed, PlaylistPage, ProfilePage } from './containers';
import { Login, Signup, NavBar } from './components'
import './App.css';

class App extends React.Component {
  state = {currentUser: null, currentUserImage: null, songs: [], description: "", image_url: ""}

  setCurrentUser = (data) => {
    this.setState({
      currentUser: data.user,
      currentUserImage: data.image
    })
  }

  logout = () => {
    this.setState({currentUser: null})
  }

  inputHandler = (event) => {this.setState({[event.target.name]: event.target.value})}

  submitFormHandler = (event) => {
    event.preventDefault()
  }

  render(){
    const {currentUser, currentUserImage, songs, description, image_url} = this.state
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
