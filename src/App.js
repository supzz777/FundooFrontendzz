import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Router/Router'
import {Provider} from 'react-redux'
import store from "./Redux/Store"

function App(props) {
  return (
   
      
      <div className="App"> 
  
  <Provider store={store}>
         <Router />  
  </Provider>
     
      
   
        {/* <Login /> */}
        {/* <Registration/> */}
        {/* <ForgotPassword/> */}
        {/* <ResetPassword/> */}

       
      </div>
  

   
  );
}

export default App;
