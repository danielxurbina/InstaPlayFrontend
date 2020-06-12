import React from 'react'

class Comment extends React.Component{
    render(){
        return(
            <div>
                <h4> {this.props.comment.user.username} {this.props.comment.text} </h4>
            </div>
        )
    }
}

export default Comment