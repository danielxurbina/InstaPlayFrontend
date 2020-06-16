import React from 'react'
import '../styles/comment.css'

class CommentForm extends React.Component{
    render(){
        const {text, songID} = this.props
        return(
                <form className="comment-form" onSubmit={(event) => this.props.commentSubmitHandler(event, songID)}>
                    <input  type="text" name="text" value={text} placeholder="Add a comment..." onChange={(event) => this.props.inputHandler(event)}/>
                    <button className="comment-button" type="submit">Post</button>
                </form>
        )
    }
}

export default CommentForm