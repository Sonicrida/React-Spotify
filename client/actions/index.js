import axios from 'axios';

export const setAccessToken = (token) => {
    return {
        type: 'SET_ACCESS_TOKEN',
        token
    }
}

export const getTracksList = (searchQuery, token) => {
    return function(dispatch) {
        axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/search?query=' + searchQuery + '&type=track',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => {
            dispatch({
                type: 'GET_TRACKS_LIST',
                data: response.data
            })
        });
        // .then(function(response) {
        //     console.log(response.data.tracks);
        //     return {
        //         type: 'GET_TRACKS_LIST',
        //         data: response.data.tracks
        //     }
        // });
    }
    
    // return {
    //     type: 'GET_TRACKS_LIST',
    //     searchQuery
    // }
    
}
