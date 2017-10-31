import React from 'react'
import { Route } from 'react-router'
import Home from '../Home'
import SignUp from '../Components/Signup'

var routes = (
	<div>
		<Route path ='/' component={Home} />
    <Route path='/signup' component={SignUp} />
	</div>
)


export default routes;
