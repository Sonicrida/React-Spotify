import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import api from '../utils/api.js'
import axios from 'axios';
import config from '../utils/config'
//import runtimeEnv from '@mars/heroku-js-runtime-env';

class App extends Component {

    spotify() {

        // const env = runtimeEnv();

        const client_id = process.env.REACT_APP_CLIENT_ID || config.REACT_APP_CLIENT_ID;
        console.log("Log process");
        console.log(client_id);
        const scope = 'user-read-private user-read-email';
        const redirect_uri = process.env.REACT_APP_REDIRECT_URI || config.REACT_APP_REDIRECT_URI;

        let url='https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

        window.location = url;
    }

    getHashParams() {
          let hashParams = {};
          let e, r = /([^&;=]+)=?([^&;]*)/g,
              q = window.location.hash.substring(1);
          while ( e = r.exec(q)) {
             hashParams[e[1]] = decodeURIComponent(e[2]);
          }
          return hashParams;
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
            console.log(response);
        });
    }


    render() {

        const params = this.getHashParams();
        console.log(params);
        
        if(params) {
            this.getData(params);
        }
        

        return (
            <div>
                <Paper>
                    <button onClick={this.spotify}>Spotify!</button>
                    <div>
                        {params.access_token}
                    </div>
                </Paper>
            </div>
        )
    }
}

export default App;