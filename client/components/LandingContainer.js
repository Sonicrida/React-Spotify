import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAccessToken } from '../actions';
import Landing from '../components/Landing';
import SpotifyFormContainer from './SpotifyFormContainer';
import queryString from 'query-string';

class LandingContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //console.log(dispatch);
        //console.log(this.props);
        //console.log(queryString.parse(location.hash).access_token);
        this.props.dispatch(setAccessToken(queryString.parse(location.hash).access_token));
    }

    render() {

        // if(this.props.token) {
        //     console.log(this.props);
        //     console.log("Token");
        // }

        // else {
        //     console.log("no token");
        //     console.log(this.props);
        // }
        return (
            <div>
               <Landing spotifyAuth={this.props.spotifyAuth}/>
               <SpotifyFormContainer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    //console.log("State");
    //console.log(state);
    return {
        accessToken: state.accessToken
    }
}

export default connect(mapStateToProps)(LandingContainer);