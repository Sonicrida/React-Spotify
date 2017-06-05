import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Paper from 'material-ui/Paper';

class App extends Component {
    render() {
        return (
            <div>
                <Paper zDepth="2">
                    Hello
                </Paper>
            </div>
        )
    }
}

export default App;