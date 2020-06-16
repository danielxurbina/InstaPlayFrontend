import React from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './Switch.css'

function PlaylistForm(props) {
    console.log(props.isOn)
    return (
      <>
        <input checked={props.isOn} onChange={props.handleToggle} className="react-switch-checkbox" id={`react-switch-new`} type="checkbox"></input>
          <label style={{ background: props.isOn && props.onColor }} className="react-switch-label" htmlFor={`react-switch-new`}>
            <span className={`react-switch-button`} />
          </label>
          {props.isOn ? 
            <Form inline onSubmit={props.createPlaylistHandler}>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input className="input1" type="text" name="title" placeholder="Title" />
                <Input  type="text" name="description" placeholder="Description" />
                {props.currentUser ? <Input type="hidden" name="user_id" value={props.currentUser.id}/> : null}
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="file" name="song" />
              </FormGroup>
              <Button className="button">Submit</Button>
            </Form>
          :  null}
      </>
    );
};

export default PlaylistForm