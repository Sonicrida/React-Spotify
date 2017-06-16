import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { TextField } from 'redux-form-material-ui';

let SpotifyForm = props => {
    const { handleSubmit } = props;
    return (
        <Paper className="search-form">
            <h1>Search for a song</h1>
            <form onSubmit={ handleSubmit }>
                <div>
                    <Field name="searchQuery" component={TextField} hintText="Song Title" />
                </div>
                <RaisedButton secondary type="submit">Submit</RaisedButton>
            </form>
        </Paper>
        
    )
}

SpotifyForm = reduxForm({
    form: 'spotifySearch'
})(SpotifyForm);

export default SpotifyForm;