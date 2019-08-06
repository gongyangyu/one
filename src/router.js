import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Login from './pages/login'
import Admin from './Admin';
import App from './App';
import Buttons from './pages/ui/button'
import Home from "./pages/home";

export default class GRouter extends React.Component{

    render(){
        return (
            <HashRouter>
                <App>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' render={()=><Admin>
                        <Route path='/admin/ui/buttons' component={Buttons}></Route>
                        <Route path='/admin/dashboard' component={Home}/>
                        {/*<Route component={Nomatch}></Route>*/}
                    </Admin>}></Route>
                    <Route path='/order/detail' component={Login}></Route>
                </App>
            </HashRouter>
        );
    }
}