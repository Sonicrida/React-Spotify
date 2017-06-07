import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Landing extends Component {

    render() {
        return (
            <div>
               <RaisedButton onTouchTap={this.props.spotify}>Spotify!</RaisedButton>
            </div>
        )
    }

}

export default Landing;