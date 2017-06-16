import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import SpotifyForm from './SpotifyForm';
import Song from './Song';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
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
    return (
      <div>

        {this.props.accessToken ? (
            <div>
              <SpotifyForm accessToken={this.props.accessToken} onSubmit={this.submit} />

              <div className="tracks-list-container">
                {this.props.tracksData.tracksData ? (
                    <List>
                      {this.props.tracksData.tracksData.tracks.items.map(function(track) {
                        return (
                          <Song 
                            key={track.id}
                            name={track.name}
                            artists={track.artists}
                          />
                        )
                      })}
                    </List>
                ) : (
                  <span className="tracks-placeholder">No tracks</span>
                )}
              </div>
            </div>
        ) : (
            <h1 className="form-header">You must be logged in to use this page!</h1>
        )}


        
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    console.log(state.tracksData.tracksData);
    return {
        accessToken: state.accessToken,
        tracksData: state.tracksData

    }
}

export default connect(mapStateToProps)(FormContainer);