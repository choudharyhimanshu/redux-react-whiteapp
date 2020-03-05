import {
    createStore,
    applyMiddleware,
    combineReducers,
    Middleware
} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import exampleReducer, {
    IExampleReducerState
} from './reducers/example.reducer';

export interface IRootReducerState {
    example: IExampleReducerState;
}

const middlewares: Middleware[] = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(
        createLogger({
            collapsed: true
        })
    );
}

const store = createStore(
    combineReducers({
        example: exampleReducer
    }),
    applyMiddleware(...middlewares)
);

export default store;
