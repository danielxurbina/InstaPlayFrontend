import React from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.png'
import '../styles/navbar.css'

class NavBar extends React.Component {
  
    render() { 
        return ( 
          // <div className="nav-bar">
          //   <Link to="/">InstaPlay</Link>
          //   <Link to="/homepage">Homepage</Link>
          //   <Link to="/profile">Profile</Link>
          //   <Link to="/playlists">Playlists</Link>
            // {this.props.currentUser ? (<Link to="/" onClick={this.props.logout}>Sign out</Link>) 
            // : (<Link to="/login">Log In</Link>)}
            // {this.props.currentUser ? (<Link />) : (<Link to="/signup">Sign up</Link>)} 
          // </div>
          <nav className="nav-container">
          {/* <div className="logo">♫</div> */}
          {/* <div className="logo"><img src={logo}/></div> */}
          <div className="main-bullet">
            <Link to="/" className="logo"><img className="nav-bar-logo"src={logo}/></Link>
            <Link to="/homepage" className="nav-element">Homepage</Link>
            <Link to="/profile" className="nav-element">Profile</Link>
            <Link to="/playlists" className="nav-element">Playlists</Link>
            {this.props.currentUser ? (<Link to="/" className="nav-element" onClick={this.props.logout}>Sign out</Link>) 
            : (<Link className="nav-element" to="/login">Log In</Link>)}
            {this.props.currentUser ? (<Link />) : (<Link className="nav-element" to="/signup">Sign up</Link>)} 
          </div>
        </nav>
        );
    }
}
 
export default NavBar;

{/* <nav className="ads-c-navbar ads-c-navbar--fixed">
<section className="ads-c-navbar__navbar-brand">
  <span className="ads-c-navbar__navbar-brand-title">InstaPlay</span>
</section>

<section className="ads-c-navbar__navbar-menu">
  <ul className="ads-c-navbar__navbar-menu-items">
    <Link to="/"><li className="ads-c-navbar__navbar-menu-item">Home</li></Link>
    <Link to="/profile"><li className="ads-c-navbar__navbar-menu-item">Profile</li></Link>
    <Link to="/playlists"><li className="ads-c-navbar__navbar-menu-item">Playlists</li></Link>
    {this.props.currentUser ? (
        <Link to="/"><li className="ads-c-navbar__navbar-menu-item" onClick={this.props.logout}>Sign out</li></Link>
    ) : (
        <Fragment>
            <Link to="/signup"><li className="ads-c-navbar__navbar-menu-item">Sign up</li></Link>
            <Link to="/login"><li className="ads-c-navbar__navbar-menu-item">Log In</li></Link>
        </Fragment>
    )}
  </ul>
</section>
</nav> */}