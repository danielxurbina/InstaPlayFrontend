import React from 'react'

class MainFeedForm extends React.Component {
    render(){
        const {image_url, songs, description} = this.props
        return(
            <div className="ui segment">
            <form className="ui form" onSubmit={(event) => this.props.submitFormHandler(event)}>
              <div className="inline fields">
                <input type="file" name="songs" placeholder="Song" value={songs} onChange={(event) => this.props.inputHandler(event)}/>
                <input type="text" name="description" placeholder="Description" value={description} onChange={(event) => this.props.inputHandler(event)}/>
                <input type="text" name="image_url" placeholder="ImageURL" value={image_url} onChange={(event) => this.props.inputHandler(event)}/>
              </div>
              <button className="ui button" type="submit">Create Post</button>
            </form>
          </div>
        )
    }
}

export default MainFeedForm