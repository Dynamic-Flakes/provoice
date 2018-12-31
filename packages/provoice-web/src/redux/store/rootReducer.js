import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';



const rootReducers = combineReducers({
  // Vendor reducers
  form: formReducer,
  routing,

  // Own reducers
  
});

export default rootReducers;
