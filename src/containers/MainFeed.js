import React, {useState} from 'react'
import MainFeedForm from '../components/MainFeedForm.js'
import Search from '../components/Search.js'
import MainFeedContainer from './MainFeedContainer.js'

function MainFeed(props){
        const [value, setValue] = useState(false);
        const {songs, currentUser, userPlaylists, text, comments, likes, users} = props
        return(
            <div>
                <Search searchPosts={props.searchPosts}/>
                <MainFeedForm 
                    isOn={value} 
                    handleToggle={() => setValue(!value)}  
                    onColor="#EF476F"
                    inputHandler={props.inputHandler}
                    songSubmitHandler={props.songSubmitHandler}
                    currentUser={currentUser}
                />
                <MainFeedContainer 
                    songs={songs} 
                    currentUser={currentUser}
                    userPlaylists={userPlaylists} 
                    text={text} 
                    commentSubmitHandler={props.commentSubmitHandler} 
                    inputHandler={props.inputHandler}
                    likePost={props.likePost}
                    likes={likes}
                    comments={comments}
                    deleteLike={props.deleteLike}
                    users={users}
                />
            </div>
        )
}

export default MainFeed