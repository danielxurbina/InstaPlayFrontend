import React from 'react'
import './Switch.css'

const PlaylistForm = ({ isOn, handleToggle, onColor }) => {
    console.log(isOn)
    return (
      <>
        <input checked={isOn} onChange={handleToggle} className="react-switch-checkbox" id={`react-switch-new`} type="checkbox"/>
        <label style={{ background: isOn && onColor }} className="react-switch-label" htmlFor={`react-switch-new`}>
            <span className={`react-switch-button`} />
        </label>
        {isOn ? 
        <div>
            <input type="text" placeholder="Title"/>
            <input type="text" placeholder="Description"/>
            <input type="hidden" value="this is supposed to be currentUser id" />
            <button className="playlistFormButton" type="submit">Submit</button>
        </div>
        :  null}
      </>
    );
};

export default PlaylistForm