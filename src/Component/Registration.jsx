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
         if ( this.validatingRegistartionForm() )  {
            
            let user = {};

            user.firstName = this.state.firstName;
            user.lastName = this.state.lastName;
            user.email = this.state.email;
            user.phoneNumber = this.state.phoneNumber;
            user.password = this.state.password;
            user.confirmPassword = this.state.confirmPassword ;
            console.log(user);

            registerUser(user)
                .then(Response => {
                    console.log(Response, "User Registered successfully!!");
                   
                    alert(`${Response.data.message}`);
                  
                    
                }).catch((Error) => {
                    console.log("Error", Error.response)
                     console.log(Error.response.message, "User Registration failed");
                    alert(Error);
                });
            }
        }

        validatingRegistartionForm = () => {

            let fields = this.state.fields;
            let error = {} ;
            let valid = true ;
            if (!this.state.firstName)
             {
                error['firstName'] = 'Enter your first name' ;
                valid = false ;
            }
            if (!this.state.lastName)
             {
                error['lastName'] = 'Please enter your last name' ;
                valid = false ;
            }

            if (!this.state.email)
            {              
            if (!this.state.email.match(/^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\. [A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$/)) 
            {
                error['email'] = "Your Email id isn't valid..please try again.." ;
                valid = false ;
            }
            }
            
            if(!this.state.phoneNumber)
            {
            if (!this.state.phoneNumber.match(/^[0-9]{10}$/)) {
                valid = false;
                error["phoneNumber"] = "Please enter valid mobile no.";
            }
            }
                    
            
            if(!this.state.password)
            {
            if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) 
            {
                valid = false;
                error["password"] = "Please enter password properly.";
            }
            }   
            
            if(!this.state.confirmPassword)
            {
            if (!this.state.confirmPassword.match(this.state.password)) 
            {                
            valid = false;
            error["confirmPassword"] ="This feild cannot be empty..Please enter your password again ";
            }
            }
            
            this.setState({
                errors: error
              });
              return valid;
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
                                style={ {marginLeft:"-2%",width: "40%" }}
                                onChange={this.handleChangeText}
                                error={this.state.errors.firstName}
                                helperText={this.state.errors.firstName}></TextField>
                                
                            

                            <TextField
                                margin="dense"
                                size="small"
                                name="lastName"
                                id="outlined"
                                label="Last Name"
                                variant="standard"
                                style={{ marginLeft:"3%", width: "41%" }}
                                onChange={this.handleChangeText}
                                error={this.state.errors.lastName}
                                helperText={this.state.errors.lastName}></TextField>
                            

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
                                error={this.state.errors.email}
                                helperText={this.state.errors.email}
                               
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
                                error={this.state.errors.phoneNumber}
                                helperText={this.state.errors.phoneNumber}
                               
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
                                error={this.state.errors.password}
                                helperText={this.state.errors.password}
                               

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
                                error={this.state.errors.confirmPassword}
                                helperText={this.state.errors.confirmPassword}
                            />
                            
                        </div>

                        <div className="userbutton">
                            <Button
                                margin="dense"
                                size="medium"
                                variant="contained"
                                color="primary"
                                onClick={this.submitUserSignUpForm}
                               
                            >
                                Submit
                            </Button>

                            <Button 
                                 margin="dense"
                                size="medium"
                                 variant="contained"
                                 color="primary"
                                onClick={() => this.props.history.push('/')}
                            >
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
