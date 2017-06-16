import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

function Landing(props) {
        return (
            <div className="auth-button-container">
               <RaisedButton onTouchTap={props.spotifyAuth}><span className="auth-button">Login to Spotify</span></RaisedButton>
            </div>
        )
}

export default Landing;