import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Login from '../containers/Login'
import Register from '../containers/Register'
import Home from '../containers/Home'
import PrivateRoute from './private-route'



function Routes (){
    return (
        <Router>
            <Switch>
                <Route component={Login} path="/Login" />
                <Route component={Register} path="/Cadastro" />
                <PrivateRoute exact component={Home} path="/" />
            </Switch>
        </Router>
    )
}


export default Routes