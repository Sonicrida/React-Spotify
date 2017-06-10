import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import SpotifyForm from './SpotifyForm';

class FormContainer extends Component {

  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(values) {
    console.log(values);
    axios({
        method: 'get',
        url: 'https://api.spotify.com/v1/search?query=' + values.searchQuery + '&type=track',
        headers: {
            'Authorization': 'Bearer ' + this.props.accessToken
        }
    })
    .then(function(response) {
        console.log(response);
    });
  }

  render() {
    return (
      <SpotifyForm accessToken={this.props.accessToken} onSubmit={this.submit} />
    )
  }
}

const mapStateToProps = (state) => {

    
    return {
        accessToken: state.accessToken
    }
}

export default connect(mapStateToProps)(FormContainer);