import React from 'react'

class Comment extends React.Component{
    render(){
        return(
            <div>
                <h4> 
                    {this.props.comment.song.id === this.props.songs.id ? this.props.comment.user.username : null} {this.props.comment.song.id === this.props.songs.id ? this.props.comment.text : null}
                </h4>
            </div>
        )
    }
}

export default Comment