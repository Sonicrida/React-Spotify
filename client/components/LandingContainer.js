import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAccessToken } from '../actions';
import Landing from '../components/Landing';
import SpotifyFormContainer from './SpotifyFormContainer';
import queryString from 'query-string';
//import config from '../utils/config'

class LandingContainer extends Component {
    constructor(props) {
        super(props);
    }

    spotifyAuth() {
        const client_id = process.env.REACT_APP_CLIENT_ID || config.REACT_APP_CLIENT_ID;
        const scope = 'user-read-private user-read-email';
        const redirect_uri = process.env.REACT_APP_REDIRECT_URI || config.REACT_APP_REDIRECT_URI;
        let url='https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
        window.location = url;
    }

    componentDidMount() {
        if(queryString.parse(location.hash).access_token)
            this.props.dispatch(setAccessToken(queryString.parse(location.hash).access_token));
    }

    render() {
        return (
            <div>
                {this.props.accessToken ? (
                    <h1 className="landing-header">You Are Logged In!</h1>
                ) : (
                    <Landing spotifyAuth={this.spotifyAuth}/>
                )}
            </div>
            
        )
        

        
        
    }
}

const mapStateToProps = (state) => {
    return {
        accessToken: state.accessToken
    }
}

export default connect(mapStateToProps)(LandingContainer);