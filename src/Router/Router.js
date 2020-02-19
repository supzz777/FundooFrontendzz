import React, { Component } from 'react';
import {BrowserRouter  , Route } from 'react-router-dom' ;
import Login from  '../Component/Login';
import ResetPassword from '../Component/ResetPassword';
import ForgotPassword from '../Component/ForgotPassword';
import Registration from '../Component/Registration';
import Dashboard from '../Component/Dashboard';
import PersistantDrawer from '../Component/PersistantDrawer'

const Router =() => {
    
        return (

            <BrowserRouter>

            <Route  path='/' exact  component={Login} />
            <Route  path='/register'  component={Registration}/>
            <Route  path='/forgotpassword'  component={ForgotPassword}/>
            <Route  path='/resetpassword'  component={ResetPassword}/>
            <Route  path='/dashboard'  component={Dashboard}/>
            <Route path='/drawer' component={PersistantDrawer}/>

            </BrowserRouter>
        );








    
};

export default Router;
