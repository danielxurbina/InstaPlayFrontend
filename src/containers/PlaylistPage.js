import React, {useState} from 'react'
import PlaylistForm from '../components/PlaylistForm'
import PlaylistContainer from './PlaylistContainer'
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container"

function PlaylistPage(props) {
    const [value, setValue] = useState(false);
    const {userPlaylists, currentUser} = props
    return(
        <div>
            <h1 className="container">Playlists</h1>
            <PlaylistForm 
                isOn={value} 
                handleToggle={() => setValue(!value)}  
                onColor="#EF476F"
                createPlaylistHandler={props.createPlaylistHandler} 
                currentUser={currentUser} 
            />
            <Container maxWidth="md">
                <Grid container spacing={5}>
                    {userPlaylists.map(userPlaylist => 
                        <Grid xs={15} sm={15} md={5}>
                            <PlaylistContainer 
                                userPlaylist={userPlaylist} 
                                key={userPlaylist.id} 
                                currentUser={currentUser} 
                                routerProps={props.routerProps}
                            />
                        </Grid>
                    )}
                </Grid> 
            </Container>
        </div>
    )
}
export default PlaylistPage