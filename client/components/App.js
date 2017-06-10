import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import api from '../utils/api.js'
import axios from 'axios';
import config from '../utils/config'
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import LandingContainer from './LandingContainer';
import queryString from 'query-string';

injectTapEventPlugin();
//import runtimeEnv from '@mars/heroku-js-runtime-env';

class App extends Component {

    spotifyAuth() {

        // const env = runtimeEnv();

        const client_id = process.env.REACT_APP_CLIENT_ID || config.REACT_APP_CLIENT_ID;
        //console.log("Log process");
        //console.log(client_id);
        const scope = 'user-read-private user-read-email';
        const redirect_uri = process.env.REACT_APP_REDIRECT_URI || config.REACT_APP_REDIRECT_URI;

        let url='https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

        window.location = url;
    }

    getData(params) {
        axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/browse/featured-playlists',
            headers: {
                'Authorization': 'Bearer ' + params.access_token
            }
        })
        .then(function(response) {
            //console.log(response);
        });
    }


    render() {

        let params = queryString.parse(location.hash);
        
        
        if(params) {
            this.getData(params);
        }
        

        return (
            <div>
                <Router>
                    <div>
                        <Route path='/' >
                            <LandingContainer spotifyAuth={this.spotifyAuth}/>
                        </Route>
                    </div>
                    
                </Router>
                
            </div>
        )
    }
}

export default App;