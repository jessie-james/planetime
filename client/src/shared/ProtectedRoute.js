import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withUser } from '../context/UserProvider';

function ProtectedRoute(props){
    const { token } = useContext(withUser)
    const { path, redirectTo, component: C } = props
    return(
        token ? 
            <Route to={path} component={C}/>
            : <Redirect to={redirectTo}/>
    )
}

export default ProtectedRoute