import { combineReducers } from 'redux';

import headerActiveUserReducer from './headerActiveUserReducer';
import headerNotificationReducer from './headerNotificationReducer';
import headerSearchReducer from './headerSearchReducer';

const rootReducers = combineReducers({
    headerActiveUserReducer,
    headerNotificationReducer,
    headerSearchReducer
});

export default rootReducers;
