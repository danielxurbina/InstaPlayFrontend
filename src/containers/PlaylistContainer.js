import React from 'react'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import '../styles/playlist.css'

class PlaylistContainer extends React.Component{
    render(){
        const {title, id, image} = this.props.userPlaylist
        // console.log(this.props.userPlaylist)
        return(
          //   <React.Fragment>
          //   <Grid style={{position: "relative", display: "flex", minHeight: "100vh" }} container alignItems="center" justify="center">
          //     <Card style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-100%, -100%)", width: 300, height: 300, borderRadius: 50, cursor: 'pointer' }} elevation={16}>
          //       <CardContent style={{padding: 0, position: "absolute", top: 0, left: 0,}}>
          //         <h1 style={{position: 'absolute', color: 'white', top: 8, left: '20%'}}>{title}</h1>
          //         <img src={image}  alt="cover" onClick={() => this.props.routerProps.history.push(`/playlists/${id}`)}/>
          //       </CardContent>
          //     </Card>
          //   </Grid>
          // </React.Fragment>
          <div className="gridItem" style={{backgroundImage: `url(${image})`}} onClick={() => this.props.routerProps.history.push(`/playlists/${id}`)}>
                {/* <img className="playlist-image" src={image} onClick={() => this.props.routerProps.history.push(`/playlists/${id}`)}/> */}
                <h1 className="playlist-title">{title}</h1>
          </div>

        )
    }
}

export default PlaylistContainer

// const cardStyle = {      
//     position: "relative", // controls the position... duh
//     top: "50%", // controls the top position
//     left: "50%", // controls the left position
//     transform: "translate(-50%, -50%)", // controls the position to from the corners
//     width: 400, // controls the width of the card
//     height: 400, // controls the height of the card
//     borderRadius: 100 // controls the borders of the card to make it round or square 
//     }
//     const gridStyle = {
//         position: "relative", // controls the position of the container.. duh
//         minHeight: "100vh" // controls the height of the container from the top
//     }
//     const mediaStyle = {
//         padding: 0, // controls the padding of the image
//         position: "absolute", // controls the position of the image
//         top: 0, // controls the top position of the image
//         left: 0, // controls the left position of the image
//     }