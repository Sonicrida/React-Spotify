import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import spotifyApp from './reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let store = createStore(spotifyApp, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    
    document.getElementById('root')
);