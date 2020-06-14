import React, { Component } from 'react'

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
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange}/>
                <label>Password:</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange}/>
                <input type="submit" value="Login"/>
            </form>
        )
    }
}

export default Login