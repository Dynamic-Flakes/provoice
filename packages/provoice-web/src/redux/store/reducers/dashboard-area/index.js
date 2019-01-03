import { combineReducers } from 'redux';

import dashboardChartReducer from './dashboardChartReducer';
import statCardReducers from './statCardReducers';
import statFilterReducer from './statFilterReducer';
import statInfoReducer from './statInfoReducer';

const rootReducers = combineReducers({
    dashboardChartReducer,
    statCardReducers,
    statFilterReducer,
    statInfoReducer
});

export default rootReducers;
