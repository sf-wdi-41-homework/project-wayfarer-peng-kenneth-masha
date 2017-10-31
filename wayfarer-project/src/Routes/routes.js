
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
<<<<<<< HEAD
		<Route path ='/login' component={Home} />
=======
		<Route path="/cities" component={CitiesPage}/>
>>>>>>> aea52a724c76520182df823a0f414075b0be5891
	</div>
)


export default routes;
