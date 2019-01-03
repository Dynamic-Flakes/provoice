import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import logoutReducer from './logoutReducer';
import registerReducer from './registerReducer';

const rootReducers = combineReducers({
    loginReducer,
    logoutReducer,
    registerReducer
});

export default rootReducers;
