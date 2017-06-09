import { combineReducers } from 'redux';
import featuredPlaylists from './featuredPlaylists';
import accessToken from './accessToken'
const spotifyApp = combineReducers({
    featuredPlaylists,
    accessToken
});

export default spotifyApp;