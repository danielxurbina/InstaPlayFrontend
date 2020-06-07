import React from 'react'
import Posts from '../components/Posts.js'

class MainFeedContainer extends React.Component {
    render(){
        return(
            <div>
                {this.props.posts.map(post => <Posts key={post.id} posts={post}/>)}
            </div>
        )
    }
}

export default MainFeedContainer