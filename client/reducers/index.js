import { combineReducers } from 'redux';
import featuredPlaylists from './featuredPlaylists';
import accessToken from './accessToken';
import tracksData from './tracksData';
import { reducer as formReducer } from 'redux-form';
const spotifyApp = combineReducers({
    featuredPlaylists,
    accessToken,
    tracksData,
    form: formReducer,
});

export default spotifyApp;