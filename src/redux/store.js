
import thunk from 'redux-thunk'
import reducer from './reducer'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;