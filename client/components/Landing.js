import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Landing extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
               <RaisedButton onTouchTap={this.props.spotifyAuth}>Spotify!</RaisedButton>
            </div>
        )
    }

}

export default Landing;