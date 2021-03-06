import React, { Component } from 'react';
import "./Css/ForgotPassword.css" ;
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {forgetPassword} from '../Service/axios';


class ForgotPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showPassword: "",
            email: "",
          
        };
    }

    handleChangeText = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state, 'Email entered'))
    }

    submitForgetPasswordForm = () => {
       
            let userObject = {};
            userObject.email = this.state.email;
           
            forgetPassword(userObject)
                .then(Response => {

                    console.log(Response , " success")
                    alert(`Link Successfully sent to your Email !!`);

                })
                .catch(Error => {
                    console.log(Error, " fail");
                    alert(`Please Try Again !!`);
                });
        
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
                       
                    />
                </div>
                <div className="forgotbutton">
                    <Button variant="contained" color="secondary" onClick={this.submitForgetPasswordForm}>
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