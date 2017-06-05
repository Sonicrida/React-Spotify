import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import api from '../utils/api.js'
import axios from 'axios';

class App extends Component {

    spotify() {

        var client_id = process.env.CLIENT_ID;
        var scope = 'user-read-private user-read-email';
        const redirect_uri = process.env.REDIRECT_URI;

        var url='https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

        window.location = url;
    }

    getHashParams() {
          var hashParams = {};
          var e, r = /([^&;=]+)=?([^&;]*)/g,
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

        this.getData(params);

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