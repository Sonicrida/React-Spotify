import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import spotifyApp from './reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let store = createStore(spotifyApp);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    
    document.getElementById('root')
);