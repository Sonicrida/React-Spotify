import React from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';


function Song(props) {

    return(
        <span>
            <ListItem>
            {props.name} by 
            
            {props.artists.length > 1 ? (
                <span>
                    {props.artists.map(function (artist, index) {
                        if ( props.artists.length == index + 1) {
                            return (
                                <span key={artist.id}>{artist.name}</span>
                            )
                        }

                        return (
                            <span key={artist.id}>{artist.name}, </span>
                        )
                        
                    })}
                </span>
                
            ) : (
                <span>
                    {props.artists[0].name}
                </span>
            )}
            
            
        </ListItem>
        <Divider />
        </span>
        
    )

}

export default Song;