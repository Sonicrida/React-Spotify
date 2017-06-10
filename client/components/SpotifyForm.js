import React from 'react';
import { Field, reduxForm } from 'redux-form';

let SpotifyForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="searchQuery">Search Songs</label>
                <Field name="searchQuery" component="input" type="text" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

SpotifyForm = reduxForm({
    form: 'spotifySearch'
})(SpotifyForm);

export default SpotifyForm;