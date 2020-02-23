import React, { Component } from 'react';
import "./Css/ResetPassword.css" ;
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {setPassword} from "../Service/axios"

class ResetPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showPassword: false,
            password:"",
            confirmPassword:"",
            error:{},
                       
        };
       
    }

    handleChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state, 'data changed'))
    }

    validateResetPasswordFrom=()=> 
    {
        let error = {};
        let formIsValid = true;


        
            var pattern = new RegExp(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/);
    
            if (!pattern.test(this.state.password )) 
            {
              formIsValid = false;
              error["password"] = "*Please enter secure and strong password.";
            }
        
    
        if( !this.state.confirmPassword === this.state.password ) 
        {
            formIsValid = false;
            error["confirmPassword"] ="Your passwords arent matching please try again..."
        }

        // if(!this.state.password || this.state.password != this.state.confirmPassword)
        //  {
            
        //     formIsValid = false;
        //     error["confirmPassword"] ="Your passwords arent matching please try again..."
        
        // }
        

        this.setState({
            error: error
          });

          return formIsValid;
    

    }

    submitResetPasswordForm = () => 
    {
        if(this.validateResetPasswordFrom())
        {
     
            let userObject= {};
            userObject.email = this.state.email;
            userObject.password = this.state.password ;
            userObject.confirmPassword = this.state.confirmPassword ;
           
            setPassword(userObject)
                .then(Response => {

                    console.log(Response , " success")
                    alert("hey in alert",`Your Password has Successfully Changed !!`);

                })
                .catch(Error => {
                    console.log(Response, " fail");
                    alert("hey in catch alert",`Password didn't matched .. please try again.!!`);
                });


              
               }
        
    }


    render() {
        return (
                           
                <div className="resetPasswordPage">
                <div className="fundooLogo">
                    <span style={{ color: "blue" }}>F</span>
                    <span style={{ color: "red" }}>U</span>
                    <span style={{ color: "orange" }}>N</span>
                    <span style={{ color: "blue" }}>D</span>
                    <span style={{ color: "green" }}>O</span>
                    <span style={{ color: "blue" }}>O</span>
                </div>

                <div className="resetPasswordTag">
                    <h1>
                        Reset Your Password Here
                    </h1>
                </div>

                <div className="passwordFeild">
                    <TextField
                        size="small"
                        id="outlined-adornment-password"
                        variant="outlined"
                        name="password"
                        type={this.state.showPassword ? "text" : "password"}
                        label="Password"
                        margin="dense"
                        onChange={this.handleChangeText}

                      InputProps={{
                            endAdornment: (
                                <InputAdornment position="end" sytle={{ width: "1px" }}>
                                    <IconButton
                                        onClick={
                                            () => this.setState({ showPassword: !this.state.showPassword })
                                        }
                                    >
                                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>

                                </InputAdornment>
                            )
                        }}

                        error={this.state.error.password}
                        helperText={this.state.error.password}
                    />
                </div>



                <div className="confirmPasswordFeild">
                    <TextField
                        size="small"
                        margin="dense"
                        name="confirmpassword"
                        id="outlined-adornment-password"
                        variant="outlined"
                        type={this.state.showPassword ? "text" : "password"}
                        label=" Confirm Password"
                        onChange={this.handleChangeText}

                         InputProps={{
                            endAdornment: (
                                <InputAdornment position="end" sytle={{ width: "1px" }}>
                                    <IconButton
                                        onClick={
                                            () => this.setState({ showPassword: !this.state.showPassword })
                                        }
                                    >
                                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>

                                </InputAdornment>
                            )
                        }}
                        error={this.state.error.confirmPassword}
                        helperText={this.state.error.confirmPassword}
                       
                       
                    />
                </div>

                <div className="buttons">
                    <Button  variant="contained" color="secondary"
                     onClick={this.submitResetPasswordForm}>
                                                                   
                Submit
          </Button>
                    <Button variant="contained" color="secondary">
                        Cancel
          </Button>
                </div>

            </div>
        );
    }
}

export default ResetPassword;