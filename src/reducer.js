import { combineReducers } from 'redux';
import counterReducer from './containers/reducer';

const appReducer = combineReducers({
    counterReducer
});

export default appReducer;