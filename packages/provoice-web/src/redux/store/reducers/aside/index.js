import { combineReducers } from 'redux';

import asideMenuReducer from './asideMenuReducer';
import clientDetailsReducer from './clientDetailsReducer';

const rootReducers = combineReducers({
    asideMenuReducer,
    clientDetailsReducer
});

export default rootReducers;