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
           
        };

    }

    handleChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state, 'data changed'))
    }

    submitLoginForm = () => {
      
            let userObject = {};
            userObject.email = this.state.email;
            userObject.password = this.state.password;
            login(userObject)
                .then(Response => {

                    
                    console.log(Response , "Login success")
                    alert(`Login Successfull!!`);

                })
                .catch(Error => {
                    console.log(Response, "user login fail");
                    alert(`Login Failed`);
                });
        
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
                        label="userName"
                        variant="outlined"

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

