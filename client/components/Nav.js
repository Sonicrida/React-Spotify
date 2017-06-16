import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

class Nav extends Component {

    render() {

        if(this.props.accessToken) {
            return (
                <Toolbar className="nav-bar">
                    <ToolbarGroup>
                        <NavLink  className="nav-link" to='/'>
                            <RaisedButton primary={true}><span className="nav-button" >Home</span></RaisedButton>
                        </NavLink>

                        <NavLink className="nav-link" to='/search'>
                            <RaisedButton><span className="nav-button" >Search For A Song</span></RaisedButton>
                        </NavLink>
                    </ToolbarGroup>
                    <ToolbarGroup><span>Logged In!</span></ToolbarGroup>
                </Toolbar>
            )
        }

        return (
            <Toolbar className="nav-bar">
                <ToolbarGroup>
                    <NavLink  className="nav-link" to='/'>
                        <RaisedButton primary={true}><span className="nav-button" >Home</span></RaisedButton>
                    </NavLink>

                    <NavLink className="nav-link" to='/search'>
                        <RaisedButton><span className="nav-button" >Search For A Song</span></RaisedButton>
                    </NavLink>
                </ToolbarGroup>
            </Toolbar>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        accessToken: state.accessToken
    }
}

export default connect(mapStateToProps)(Nav);