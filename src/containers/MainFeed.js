import React from 'react'
import MainFeedForm from '../components/MainFeedForm.js'
import Search from '../components/Search.js'
import MainFeedContainer from './MainFeedContainer.js'

class MainFeed extends React.Component {
    render(){
        const {songs, description, image_url} = this.props
        return(
            <div>
                <Search searchPosts={this.props.searchPosts}/>
                <MainFeedForm 
                    inputHandler={this.props.inputHandler}
                    submitFormHandler={this.props.submitFormHandler}
                    description={description}
                    image_url={image_url}
                />
                <MainFeedContainer posts={this.props.posts} songs={songs}/>
            </div>
        )
    }
}

export default MainFeed