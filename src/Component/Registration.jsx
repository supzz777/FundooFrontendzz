import React, { Component } from 'react';
import './Css/Registration.css';
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import regImage from "../Image/regImage.svg";
import {registerUser} from "../Service/axios"

class Registration extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showPassword: false,
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            confirmPassword: "",
            errors: {},
        };
        
    }

    handleChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitUserSignUpForm = () => {
        // if (this.validateForm()) {
            let user = {};
            user.firstName = this.state.firstName;
            user.lastName = this.state.lastName;
            user.email = this.state.email;
            user.phoneNumber = this.state.phoneNumber;
            user.password = this.state.password;
            console.log(user);

            registerUser(user)
                .then(Response => {
                    console.log(Response, "User Registered successfully!!");
                   
                    alert(`${Response.data.message}`);
                  
                    // this.props.history.push("/");
                }).catch((Error) => {
                    console.log("Error", Error.response)
                     console.log(Error.response.message, "User Registration failed");
                    alert(Error);
                });
        }




    render() {
        return (
            <div className="userRegistration">

                <div className="fundooLogoz">
                    <span style={{ color: "blue" }}>F</span>
                    <span style={{ color: "red" }}>U</span>
                    <span style={{ color: "orange" }}>N</span>
                    <span style={{ color: "blue" }}>D</span>
                    <span style={{ color: "green" }}>O</span>
                    <span style={{ color: "red" }}>O</span>

                </div>

                <div className="signUpTag">Create Your Fundoo Account</div>

                <div className="main" style={{ flexDirection: 'row' }}>
                    <div>
                        <div className="userNameDetails">

                            <TextField
                                margin="dense"
                                size="medium"
                                name="firstName"
                                id="outlined"
                                label="First Name"
                                variant="standard"
                                style={{ width: "44%" }}
                                onChange={this.handleChangeText}
                                
                            />

                            <TextField
                                margin="dense"
                                size="small"
                                name="lastName"
                                id="outlined"
                                label="Last Name"
                                variant="standard"
                                style={{ width: "44%" }}
                                onChange={this.handleChangeText}
                            />

                        </div>

                        <div className="emailId">
                            <TextField
                                margin="dense"
                                size="small"
                                name="email"
                                id="outlined"
                                label="Email"
                                variant="standard"
                                onChange={this.handleChangeText}
                               
                            />

                        </div>
                        <div className="phoneNumber">
                            <TextField
                                margin="dense"
                                size="small"
                                className="phoneNumber"
                                name="phoneNumber"
                                id="outlined"
                                label="Phone Number"
                                variant="standard"
                                onChange={this.handleChangeText}
                               
                            />
                        </div>

                        <div className="userPassword">
                            <TextField
                                size="small"
                                id="outlined-adornment-password"
                                variant="standard"
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

                            />
                        </div>

                        <div className="userConfirmPassword">

                            <TextField
                                size="small"
                                margin="dense"
                                name="confirmPassword"
                                id="outlined-adornment-password"
                                variant="standard"
                                type={this.state.showPassword ? "text" : "password"}
                                label=" Confirm Password "
                                value={this.state.confirmPassword}
                                onChange={this.handleChangeText}
                                style={{ width: "44%" }}
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
                            />
                            
                        </div>

                        <div className="userbutton">
                            <Button
                                margin="dense"
                                size="medium"
                                variant="contained"
                                color="primary"
                                //onClick={this.handelRegister}
                                onClick={this.submitUserSignUpForm}
                            >
                                Submit
                            </Button>

                            <Button 
                                 margin="dense"
                                size="medium"
                                 variant="contained"
                                 color="primary"
                                onClick={() => this.props.history.push('/')}>
                                Already Registered?
                            </Button>
                        </div>
                    </div>

                    <div className="image">
                        <img src={regImage} width="80%" height="60%" ></img>
                        <p className="line" style={{ alignItems: "center" }}>
                            <span style={{ color: "blue" }}> Just One Step Away From Your FUNDOO </span>
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Registration;
