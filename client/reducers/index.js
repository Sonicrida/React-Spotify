import { combineReducers } from 'redux';
import featuredPlaylists from './featuredPlaylists';
import accessToken from './accessToken';
import { reducer as formReducer } from 'redux-form';
const spotifyApp = combineReducers({
    featuredPlaylists,
    accessToken,
    form: formReducer,
});

export default spotifyApp;