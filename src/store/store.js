import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
const middleware = [thunk];

const intialState = {};

//PRODUCTION MODE
// let composeTool = composeTool( applyMiddleware(...middleware) );
// DEVELOPMENT MODE
let composeTool = compose( applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

const store = createStore(
    rootReducer,
    intialState,
    composeTool
)

export default store;