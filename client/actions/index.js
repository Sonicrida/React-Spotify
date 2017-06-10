import axios from 'axios';

export const setAccessToken = (token) => {
    return {
        type: 'SET_ACCESS_TOKEN',
        token
    }
}

export function getTracksList(searchQuery, token) {
    return function(dispatch) {
        return axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/search?query=' + searchQuery + '&type=track',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(function(response) {
            //console.log(response.data.tracks);
            return {
                type: 'GET_TRACKS_LIST',
                data: response.data.tracks
            }
        });
    }
    
}