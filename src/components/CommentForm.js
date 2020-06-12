import React from 'react'

class CommentForm extends React.Component{
    render(){
        const {text, songID} = this.props
        return(
            <div>
                <form onSubmit={(event) => this.props.commentSubmitHandler(event, songID)}>
                    <input type="text" name="text" value={text} placeholder="Add a comment..." onChange={(event) => this.props.inputHandler(event)}/>
                    <button type="submit">Post</button>
                </form>
            </div>
        )
    }
}

export default CommentForm