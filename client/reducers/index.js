import { combineReducers } from 'redux';
import featuredPlaylists from './featuredPlaylists';
const spotifyApp = combineReducers({
    featuredPlaylists,
});

export default spotifyApp;