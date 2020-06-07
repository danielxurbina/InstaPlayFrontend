import React from 'react'

class Search extends React.Component {
    render(){
        return(
            <div>
                <input 
                    type="text" 
                    placeholder={"Search for a Post"} 
                    onChange={(event) => this.props.searchPosts(event)}
                />
            </div>
        )
    }
}

export default Search