import React from 'react'
const usersURL = "http://localhost:3000/users"
const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }

class Signup extends React.Component {

    state = {name: "", username: "", password: ""}

    handleOnChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let newUser = {
            name: this.state.name, 
            username: this.state.username, 
            password: this.state.password
        }

        fetch(usersURL, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(newUser)
        })
    }

    render(){
        const {name, username, password} = this.state
        return(
            <div className="SignUp">
            <form className="form" onSubmit={this.handleSubmit}>
            <div className="input-container">
              <label className="label">Name: </label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                value={name}
                onChange={this.handleOnChange}
              />
            </div>
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
              <a href="/login" className="link forgotten-password">
                Log in?
              </a>
            </div>
            <button type="submit" id="login-btn" value="Signup">
              Sign up
            </button>
          </form>

            </div>
        )
    }
}

export default Signup