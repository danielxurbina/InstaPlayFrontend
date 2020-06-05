import React from 'react'
import MainFeedForm from '../components/MainFeedForm.js'

class MainFeed extends React.Component {
    render(){
        const {songs, description, image_url} = this.props
        return(
            <div>
                MainFeed
                <MainFeedForm 
                    inputHandler={this.props.inputHandler}
                    submitFormHandler={this.props.submitFormHandler}
                    songs={songs}
                    description={description}
                    image_url={image_url}
                />
            </div>
        )
    }
}

export default MainFeed