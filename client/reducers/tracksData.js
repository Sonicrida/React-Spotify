const tracksData = (state = {}, action) => {
    switch (action.type) {
        case 'GET_TRACKS_LIST': {
            return Object.assign({}, state, {
                tracksData: action.data
            });
        }
            
        default: {
            return state;
        }
            
    }
}

export default tracksData;