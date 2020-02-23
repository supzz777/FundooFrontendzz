import axios from 'axios' ;

export function registerUser(registrationDto) 
{
    console.log(registrationDto);
    
    return axios.post("http://localhost:8080/fundoo/user/register", registrationDto, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    }
    );
}


export function login(loginDto) 
{
    return axios.post("http://localhost:8080/fundoo/user/login", loginDto, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    }
    );
}

export function forgetPassword(forgetPasswordDto) 
{
    return axios.post("http://localhost:8080/fundoo/user/forgotpassword", forgetPasswordDto, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    }
    );
}

export function setPassword(setPasswordDto) 
{
    return axios.post("http://localhost:8080/fundoo/user/resetpassword", setPasswordDto, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    }
    );
}