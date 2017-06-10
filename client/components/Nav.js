import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

class Nav extends Component {

    render() {
        return (
            <Toolbar >
                <ToolbarGroup>
                    <NavLink to='/'>
                        <RaisedButton primary={true}>Home</RaisedButton>
                    </NavLink>
                </ToolbarGroup>
            </Toolbar>
        )
    }

}

export default Nav;