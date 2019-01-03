import { combineReducers } from 'redux';

import languageOptionsReducer from './languageOptionsReducer';
import topMenuReducer from './topMenuReducer';

const rootReducers = combineReducers({
    languageOptionsReducer,
    topMenuReducer
});

export default rootReducers;