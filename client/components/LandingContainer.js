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

        if(this.props.accessToken) {
            return (
                <div>
                    <SpotifyFormContainer />
                </div>
            )
        }
        
        return (
            <div>
               <Landing spotifyAuth={this.props.spotifyAuth}/>
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