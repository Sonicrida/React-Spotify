import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Nav from './Nav';
import LandingContainer from './LandingContainer';
import SpotifyFormContainer from './SpotifyFormContainer';
import './App.css';

injectTapEventPlugin(); //Initialize tap event for clicks
//import runtimeEnv from '@mars/heroku-js-runtime-env';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Paper className="main-container">
                        <Nav />
                        <Route exact path='/' component={LandingContainer}/>
                        <Route path='/search' component={SpotifyFormContainer} />
                    </Paper>
                    
                </Router>
                
            </div>
        )
    }
}

export default App;