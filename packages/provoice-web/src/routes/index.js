import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const App = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ '../App'),
  loading: () => null,
  modules: ['app']
});


const routes = () => (
    <div>
    <Route exact path="/" component={App} />
    </div>
  
);

export default routes;