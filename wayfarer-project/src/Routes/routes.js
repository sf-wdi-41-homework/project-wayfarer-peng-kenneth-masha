import React from 'react';
import { Route } from 'react-router';
import Home from '../Home';
import Profile from '../Profile';

var routes = (
	<div>
		<Route path ='/' component={Home} />
		<Route path="/profile" component={Profile}/>
	</div>
)


export default routes;
