/**
 * Created by alex.kozovski on 10/6/15.
 */
var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profile');
//var Router = require('react-router');
//var IndexRoute = Router.IndexRoute;
//var Route = Router.Route;
import {Router, Route, IndexRoute} from 'react-router'

module.exports = (
    //path / render Main
    // if no other path the indexRoute(default route) will render Home
    //Main will always show
    //Home is nested !!!important
    <Route name ="app" path="/" component={Main}>
        <Route name ="profile" path="profile/:username" component={Profile} />
        <IndexRoute component={Home}/>
    </Route>
);