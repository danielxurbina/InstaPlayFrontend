import React, { Component } from 'react'
import '../styles/login.css'

class Login extends Component {
    state = {username: '', password: ''}

    handleOnChange = (event) => {this.setState({[event.target.name]: event.target.value})}

    handleSubmit = (event) => {
        event.preventDefault()
       
        let user = {
            username: this.state.username,
            password: this.state.password
        }

        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => 
            this.props.setCurrentUser(data),
            this.props.routerProps.history.push('/homepage')
        )
    }

    render(){ 
        const {username, password} = this.state
        return(
            // <form onSubmit={this.handleSubmit}>
            //     <label>Username:</label>
            //     <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange}/>
            //     <label>Password:</label>
            //     <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange}/>
            //     <input type="submit" value="Login"/>
            // </form>
            <div className="Login">
            <form className="form" onSubmit={this.handleSubmit}>
            <div className="input-container">
              <label className="label">Username: </label>
              <input
                type="text"
                name="username"
                className="input"
                placeholder="Username"
                value={username}
                onChange={this.handleOnChange}
              />
            </div>
            <div className="input-container">
              <label className="label">Password: </label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={this.handleOnChange}
              />
              <a href="/signup" className="link forgotten-password">
                Sign up?
              </a>
            </div>
            <button type="submit" id="login-btn" value="Login">
              Login
            </button>
          </form>

            </div>
        )
    }
}

export default Login