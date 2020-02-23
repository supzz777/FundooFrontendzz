import React, { Component } from 'react';
import './Css/Login.css';
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from '@material-ui/core/Button';
import {login} from '../Service/axios';
import { hashHistory } from 'react-router' ;



export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPassword: false,
            userName: "",
            userPassword: "",
            email: "",
            password: "",
            isValid: true,
            error:{},
           
        };

    }

    handleChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state, 'data changed'))
    }

    validateLoginForm=() => {
        let error = {};
        let formIsValid = true;


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

      if (!this.state.password) 
      {
        formIsValid = false;
        error["password"] = "*Please enter your password.";
      }

      this.setState({
        error: error
      });
      return formIsValid;

    }



    

    submitLoginForm = () => {
        if (this.validateLoginForm()) {
      
            let userObject = {};
            userObject.email = this.state.email;
            userObject.password = this.state.password;
            //  let Token= localStorage.getItem("Token" ,Response.data.data);
            login(userObject)
                .then(Response => {
                    console.log(Response , "Login success")
                    alert(`Login Successfull!!`);
                                        
                    localStorage.setItem("Token" ,Response.data.data);
                    localStorage.setItem("FirstName" ,Response.data.userFirstName);
                    localStorage.setItem("LastName" ,Response.data.userLastName);
                    localStorage.setItem("Email" ,Response.data.email);


                    
                    this.props.history.push('/dashboard');
                    

                })
                .catch(Error => {
                    console.log(Response, "user login fail");
                    alert(`Login Failed`);
                });
            }
    }


    render() {
        return (
            <div className="loginPage">

                <div className="FundooLogo">
                    <span style={{ color: "blue" }}>F</span>
                    <span style={{ color: "red" }}>U</span>
                    <span style={{ color: "orange" }}>N</span>
                    <span style={{ color: "blue" }}>D</span>
                    <span style={{ color: "green" }}>O</span>
                    <span style={{ color: "blue" }}>O</span>
                </div>
                <div className="signInLogo" >
                    <span>Login </span>
                </div>


                <div className="usernameText">

                    <TextField
                        margin="dense"
                        size="small"
                        name="email"
                        id="outlined-full-width"
                        label="userEmail"
                        variant="outlined"
                        onChange={this.handleChangeText}
                        error={this.state.error.email}
                        helperText={this.state.error.email}
                    />
                </div>

               
                <div className="passwordText">
                    <TextField

                        size="small"
                        margin="dense"
                        id="outlined-adornment-password"
                        variant="outlined"
                        name="password"
                        style={{ width: "100%" }}
                        type={this.state.showPassword ? "text" : "password"}
                        label="passwordFeild"
                        margin="dense"
                        onChange={this.handleChangeText}

                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end" >
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


                <div className="ButtonsLoginRegister">

                    <Button variant="outlined" color="secondary"  
                    onClick={() => this.props.history.push('/register')}
                     >  Register   </Button>

                    <Button variant="outlined" color="secondary"  
                    onClick={this.submitLoginForm} >  Login  </Button>

                </div>



                <div className="Forgotpassword">

                    <Button  variant="outlined" color="secondary"
                     onClick={() => this.props.history.push('/forgotpassword')}
                     style={{ color: '#9e2059' }
                }>Forgot Password?</Button>

                </div>
            </div>



        );
    }
}

