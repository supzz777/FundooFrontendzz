import React, { Component } from 'react';
import "./Css/Dashboard.css" ;
import MenuIcon from '@material-ui/icons/Menu';
import googleKeepLogo from '../Image/googleKeepLogo.png'
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField  from '@material-ui/core/TextField';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    };


      handleChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() 
    {
        return(
            <div className = "dashBoardPage">

                <div className = "navBar">

                   
                    <div className ="menu">
                    
                      <MenuIcon/>

                    </div>

                    <div className ="googleKeepImage">

                        <img src = {googleKeepLogo} alt = "keepLogo"/>

                    </div>

                    <Typography className = "keep">
                        
                       <span style={{color:"#010815" }}> Keep </span>

                    </Typography>
                    
                    <div className= "searchBarPlace">
                        {/* <div className= "searchIcon">
                        <SearchIcon />
                        </div> */}
                        
                        {/* <InputBase type="text" id="filter" 
                        placeholder="Search..." 
                        onChange={this.handleInputChange}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                         */}

                        {/* <form>
                            <input
                            type="text"
                            placeholder= <SearchIcon />
                            value={this.props.filterText}
                            ref="filterTextInput"
                            onChange={this.handleChange}
                            />
                         
                         </form> */}

                         {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}

                         
                         <SearchIcon style={{padding:1}}/>
                         
                        <TextField
                            placeholder="search"
                            onChangeText={(searchString) => {this.setState({searchString})}}
                            underlineColorAndroid="transparent"
                            InputProps= {{disableUnderline:true}}
                        />
                        
                       
                    </div>

                    <div className = "refresh">
                        <RefreshIcon/>
                    </div>

                    <div className= "viewList">

                        <ViewStreamIcon/>
                    </div>

                    <div className= "settingsIcon">
                        <SettingsIcon/>
                    </div>

                    <div className= "appsIcon">
                        <AppsIcon/>
                    </div>

                    <div className= "accountPic">
                        <AccountCircleIcon fontSize="large"/>
                    </div>

                </div>


                
            </div>
        );
    }
    
}

export default Dashboard;