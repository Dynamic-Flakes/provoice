import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import auth from '../store/reducers/auth/';
import header from '../store/reducers/header';
import topnav from '../store/reducers/top-nav';
import footer from '../store/reducers/footer';
import dashboard from '../store/reducers/dashboard-area';
import aside from '../store/reducers/aside';




const rootReducers = combineReducers({
  // Vendor reducers
  form: formReducer,
  routing,

  // Own reducers
  aside,
  auth,
  header,
  footer,
  dashboard,
  topnav

});

export default rootReducers;
