import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './form.css'

function MainFeedForm(props){
        const {currentUser} = props
        return(
                <>
                <input checked={props.isOn} onChange={props.handleToggle} className="react-switch-checkbox" id={`react-switch-new`} type="checkbox"></input>
                 <label style={{ background: props.isOn && props.onColor }} className="react-switch-label" htmlFor={`react-switch-new`}>
                    <span className={`react-switch-button`} />
                </label>
                {props.isOn ? 
                // <div>
                //     <form onSubmit={props.createPlaylistHandler}>
                //       <input type="text" name="title" placeholder="Title"/>
                //       <input type="text" name="description" placeholder="Description"/>
                //       <input type="file" name="image"/>
                //       {props.currentUser ? <input type="hidden" name="user_id" value={props.currentUser.id}/> : null}
                //       <button className="playlistFormButton" type="submit">Submit</button>
                //     </form>
                // </div>
                    <Form inline onSubmit={props.songSubmitHandler}>
                      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input className="input1" type="text" name="title" placeholder="Title" />
                        <Input  type="text" name="description" placeholder="Description" />
                        <Input type="text" name="post_image" placeholder="Image Url" />
                        {currentUser ? <Input type="hidden" name="user_id" value={currentUser.id}/> : null}
                      </FormGroup>
                      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input className="file" type="file" name="song" />
                      </FormGroup>
                      <Button className="button">Submit</Button>
                    </Form>
                :  null}
              </>
        )
}

export default MainFeedForm