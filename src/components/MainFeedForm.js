import React from 'react'

class MainFeedForm extends React.Component {
    render(){
        const {currentUser} = this.props
        return(
            <div className="ui segment">
            <form className="ui form" onSubmit={this.props.submitFormHandler}>
              <div className="inline fields">
                <input type="file" name="song" />
                <input type="text" name="title" placeholder="Song Title"/>
                <input type="text" name="description" placeholder="Description" />
                <input type="text" name="post_image" placeholder="ImageURL" />
                {currentUser ? <input type="hidden" name="user_id" value={currentUser.id}/> : null}
              </div>
              <button className="ui button" type="submit">Create Post</button>
            </form>
          </div>
        )
    }
}

export default MainFeedForm