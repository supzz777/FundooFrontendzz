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
            password: "",
            confirmpassword: "",
                       
        };
       
    }

    handleChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state, 'data changed'))
    }

    submitResetPasswordForm = () => {
     
            let userObject= {};
            userObject.email = this.state.email;
            userObject.password = this.state.password ;
            userObject.confirmPassword = this.state.confirmpassword ;
           
            setPassword(userObject)
                .then(Response => {

                    console.log(Response , " success")
                    alert(`Your Password has Successfully Changed !!`);

                })
                .catch(Error => {
                    console.log(Error, " fail");
                    alert(`Password didn't matched .. please try again.!!`);
                });
        
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
                        label="password"
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



                <div className="confirmPasswordFeild">
                    <TextField
                        size="small"
                        margin="dense"
                        name="confirmpassword"
                        id="outlined-adornment-password"
                        variant="outlined"
                        type={this.state.showPassword ? "text" : "password"}
                        label=" confirm "
                        value={this.state.confirmPassword}
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

                <div className="buttons">
                    <Button  variant="contained" color="secondary" onClick={this.submitResetPasswordForm}>
                                                                   
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