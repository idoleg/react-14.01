import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from './containers/Router';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {initStore} from './utils/store';

// console.log('initStore: ', initStore);

ReactDOM.render(
    <Provider store={initStore()}>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    </Provider>,

    document.getElementById('root'),
);