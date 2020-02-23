import React, { Component } from 'react';
import "./Css/ForgotPassword.css" ;
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {forgetPassword} from '../Service/axios';


class ForgotPassword extends Component
{

    constructor(props) {
        super(props);

        this.state = {
            showPassword:"",
            email:"",
            error:{},
          
        };
    }

    handleChangeText = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state, 'Email entered'))
    }

    validateForgotPasswordFrom =() => 
    {

        let error = {};
        let formIsValid =true;

          if ( this.state.email !== "undefined" || !this.state.email )
        {
            //regular expression for email validation
            var pattern = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\. [A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
            if (!pattern.test(this.state.email)) 
            {
              formIsValid = false;
              error["email"] = "*Please enter a valid email-ID.";
                
            }
        }

        this.setState({
            error: error
          });
        return formIsValid;

    }

    submitForgetPasswordForm = () =>
     {
        if(this.validateForgotPasswordFrom())
        {
            let userObject = {};
            userObject.email = this.state.email;
           
            forgetPassword(userObject)
                .then(Response => {

                    console.log(Response , " success")
                    alert( " this .alert",`Link Successfully sent to your Email !!`);

                })
                .catch(Error => {
                    console.log(Error, " fail");
                    alert( "this.alert.2"`Please Try Again !!`);
                });
           
                   
           }
     
       
    }

    render() {
        return (
            <div className ="ForgotPassword">
                            
                <div className="fundooLogo">
                    <span style={{ color: "Blue" }}>F</span>
                    <span style={{ color: "red" }}>U</span>
                    <span style={{ color: "green" }}>N</span>
                    <span style={{ color: "blue" }}>D</span>
                    <span style={{ color: "orange" }}>O</span>
                    <span style={{ color: "blue" }}>O</span>
                </div>
                <div className="ForgotPasswordtitle">
                    
                    <span style={{ color: "#6e499e" }}> Forgot</span>
                    <span style={{ color: "#2f9683" }}> Password </span>

                    </div>

                <div className="emailtext">
                    
                    <TextField id="outlined-search" margin="dense"
                        size="small"
                        label="Enter the Email id"
                        type="search"
                        variant="outlined"
                        name="email"
                        onChange={this.handleChangeText}
                        error={this.state.error.email}
                        helperText={this.state.error.email}
                       
                    />
                </div>
                <div className="forgotbutton">

                    <Button variant="contained" color="secondary"
                     onClick={this.submitForgetPasswordForm} >
                        Submit
                    </Button>

                    <Button variant="contained" color="secondary" >
                        Cancel
                  </Button>
                  
                </div>
            
                
            </div>
        );
    }
}

export default ForgotPassword;