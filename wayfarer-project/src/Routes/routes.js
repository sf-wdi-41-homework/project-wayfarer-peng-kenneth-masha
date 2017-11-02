
import React from 'react';
import { Route } from 'react-router';
import Home from '../Home';
import SignUp from '../Components/Signup';
import Profile from '../Profile';
import CitiesPage from '../CitiesPage';
import SanFrancisco from '../SanFrancisco';

var routes = (
	<div>
		<Route path ='/' component={Home} />
    <Route path='/signup' component={SignUp} />
		<Route path="/profile" component={Profile}/>
		<Route path="/cities" component={CitiesPage}/>
		<Route path="/sanfrancisco" component={SanFrancisco}/>
	</div>
)


export default routes;
