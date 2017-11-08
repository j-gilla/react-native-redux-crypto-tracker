import {Platform} from 'react-native';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReduer from './Reducers';

const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(
    RootReduer,
    compose(
        middleware,
        devTools({
            name: Platform.OS,
            hostname: 'localhost',
            post: 5678
        }),
    )
);

export default Store;