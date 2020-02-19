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

    constructor(props)
     {
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

    // validateForm = () =>
    // {
    //   let error = {};
    //   let formIsValid = true;

    //   if (!this.state.firstName) 
    //   {
    //     formIsValid = false;
    //     error["firstName"] = "*Please enter your FirstName.";
    //   }

    //   if (!this.state.lastName) 
    //   {
    //     formIsValid = false;
    //     error["lastName"] = "*Please enter your LastName.";
    //   }

     
    // //   if ( this.state.email !== "undefined" || !this.state.email )
    // // {
    // //     //regular expression for email validation
    // //     var pattern = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\. [A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
    // //     if (!pattern.test(this.state.email)) 
    // //     {
    // //       formIsValid = false;
    // //       error["email"] = "*Please enter a valid email-ID.";
    // //     }
    // // }
    // if (!RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\. [A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$").test(this.state.email)) {
    //     error['email'] = '*Enter valid Email id'
    // }
   
    // if (!this.state.email) {
    //     error['email'] = '*Enter the Email Id'
    //     formIsValid = false
    // }
    //   if (this.state.phoneNumber !== "undefined"  ||  !this.state.phoneNumber )
    // {
    //     var pattern = new RegExp(/^[0-9]{10}$/);
    //     if (!pattern.test(this.state.phoneNumber))
    //     {
    //       formIsValid = false;
    //       error["phoneNumber"] = "*Please enter valid mobile no.";
    //     }

    // }

   

    //   if (this.state.password !== "undefined" || !this.state.password )
    // {

    //     var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    //     if (!pattern.test(this.state.password)) 
    //     {
    //       formIsValid = false;
    //       error["password"] = "*Please enter secure and strong password.";
    //     }
    // }

    // if(this.state.confirmPassword != this.state.password)
    // {
    //     formIsValid = false;
    //     error["confirmPassword"] ="Your passwords arent matching please try again..."
    // }

    //   this.setState({
    //     error: error
    //   });
    //   return formIsValid;

    // }


    validateForm = () =>
     {
        let errors = {}

        let formIsValid = true

        if (!this.state.firstName) {
            errors['firstName'] = '*Enter the First Name'
            formIsValid = false
        }
        if (!this.state.lastName) {
            errors['lastName'] = '*Enter the Last Name'
            formIsValid = false
        }
        // if (!RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\. [A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$").test(this.state.email)) {
        //     errors['email'] = '*Enter valid Email id'
        // }
        // if (!this.state.email) {
        //     errors['email'] = '*Enter the Email Id'
        //     formIsValid = false
        // }
        if (!RegExp("(0/91)?[7-9][0-9]{9}").test(this.state.phoneNumber)) {
            errors['phoneNumber'] = '*Enter valid Phone Number'
        }
        if (!this.state.phoneNumber) {
            errors['phoneNumber'] = '*Enter your Phone Number'
            formIsValid = false
        }
        if (!RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})").test(this.state.password)) {
            errors['password'] = '*Enter the valid password'
            formIsValid = false
        }
        if (!this.state.password) {
            errors['password'] = '*Enter the password'
            formIsValid = false
        }
        if (!this.state.confirmPassword) {
            errors['confirmPassword'] = '*Enter the confirm password'
            formIsValid = false
        }
        if (this.state.password !== this.state.confirmPassword) {
            errors['confirmPassword'] = '*Password does\'t match'
            formIsValid = false
        }

        this.setState({
            errors: errors
        })
        return formIsValid
    }


    submitUserSignUpForm = () => 
    {
         if (this.validateForm()) {
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
                alert(`this 1 ${Response.data.message}`);
                this.props.history.push("/");
            }).catch((err) => {
                console.log("Error", err.response)
                console.log(err.response.data.message, "User Registration failed");
                alert(err.response.data.message);
                console.log('errro msg : ',err.response.data);
                
            });
            }

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
                                error={this.state.errors.firstName}
                                helperText={this.state.errors.firstName}


    
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
                                error={this.state.errors.lastName}
                                helperText={this.state.errors.lastName}
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
                                onChange={this.handleChangeText}
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
