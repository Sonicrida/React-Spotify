import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import SpotifyForm from './SpotifyForm';
import { getTracksList } from '../actions';

class FormContainer extends Component {

  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(values) {
    // console.log(this.props.accessToken);
    this.props.dispatch(getTracksList(values.searchQuery, this.props.accessToken));
  }

  render() {
    console.log(this.props)
    return (
      <SpotifyForm accessToken={this.props.accessToken} onSubmit={this.submit} />
    )
  }
}

const mapStateToProps = (state) => {
    // console.log("Logging state");
    // console.log(state);
    // console.log(state.tracksData);
    // console.log("End state logging");
    return {
        accessToken: state.accessToken
    }
}

export default connect(mapStateToProps)(FormContainer);