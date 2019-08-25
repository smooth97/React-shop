import { combineReducers } from 'redux';
import counterReducer from './counter';
import cartReducer from './cartReducer';

const allReducers = combineReducers({
    counter: counterReducer,
    cartReducer
})

export default allReducers