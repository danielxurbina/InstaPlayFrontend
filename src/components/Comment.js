import React from 'react'
import '../styles/comment.css'

class Comment extends React.Component{
    render(){
        return(
            // <>
            //     {/* <h4> {this.props.comment.user.username} {this.props.comment.text} </h4> */}
            //     <a class="user-comment">{this.props.comment.user.username} {this.props.comment.text}</a> 
            // </>
            <div className="comment-text">
            <span className="user">{this.props.comment.user.username}</span>
            {' '}
            <span className="comment">{this.props.comment.text}</span>
          </div>
        )
    }
}

export default Comment