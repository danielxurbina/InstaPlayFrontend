import React from 'react'
import './Switch.css'

function PlaylistForm(props) {
    console.log(props.isOn)
    return (
      <>
        <input checked={props.isOn} onChange={props.handleToggle} className="react-switch-checkbox" id={`react-switch-new`} type="checkbox"/>
        <label style={{ background: props.isOn && props.onColor }} className="react-switch-label" htmlFor={`react-switch-new`}>
            <span className={`react-switch-button`} />
        </label>
        {props.isOn ? 
        <div>
            <form onSubmit={props.createPlaylistHandler}>
              <input type="text" name="title" placeholder="Title"/>
              <input type="text" name="description" placeholder="Description"/>
              <input type="file" name="image"/>
              {props.currentUser ? <input type="hidden" name="user_id" value={props.currentUser.id}/> : null}
              <button className="playlistFormButton" type="submit">Submit</button>
            </form>
        </div>
        :  null}
      </>
    );
};

export default PlaylistForm