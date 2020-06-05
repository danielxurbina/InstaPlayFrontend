import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component {
    render() { 
        return ( 
              <div>
              <nav className="ads-c-navbar ads-c-navbar--fixed">
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
              </nav>
            </div>
        );
    }
}
 
export default NavBar;