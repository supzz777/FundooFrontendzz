import React, { Component } from 'react';
import {BrowserRouter  , Route } from 'react-router-dom' ;
import Login from  '../Component/Login';
import ResetPassword from '../Component/ResetPassword';
import ForgotPassword from '../Component/ForgotPassword';
import Registration from '../Component/Registration';
import Dashboard from '../Component/Dashboard';
import DrawerMenu from '../Component/DrawerMenu';
import Profile from '../Component/Profile';
import TakeANote from '../Component/TakeANote'
import TakeAFullNote from '../Component/TakeAFullNote'
import NotePage from '../Component/NotePage'

const Router =() => {
    
        return (

            <BrowserRouter>

            <Route  path='/' exact  component={Login} />
            <Route  path='/register'  component={Registration}/>
            <Route  path='/forgotpassword'  component={ForgotPassword}/>
            <Route  path='/resetpassword'  component={ResetPassword}/>
            <Route  path='/home'  component={Dashboard}/>
            <Route  path='/home/notes'  component={NotePage}/>
            <Route path='/drawer' component={DrawerMenu}/>
            {/* <Route path='/profile' component={Profile}/> */}
            {/* <Route path='/takenote' component={TakeANote}/> */}
            {/* <Route path='/takefullnote' component={TakeAFullNote}/> */}

            </BrowserRouter>
        );








    
};

export default Router;
