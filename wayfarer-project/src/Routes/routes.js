
import React from 'react';
import { Route } from 'react-router';
import Home from '../Home';
import SignUp from '../Components/Signup';
import Profile from '../Profile';
import CitiesPage from '../CitiesPage';


var routes = (
	<div>
		<Route path ='/' component={Home} />
    <Route path='/signup' component={SignUp} />
		<Route path="/profile" component={Profile}/>
		<Route path ='/login' component={Home} />
		<Route path="/cities" component={CitiesPage}/>

	</div>
)


export default routes;
