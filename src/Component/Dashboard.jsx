import React, { Component } from 'react';
import "./Css/Dashboard.css";
import MenuIcon from '@material-ui/icons/Menu';
import googleKeepLogo from '../Image/googleKeepLogo.png'
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';import AppsIcon from '@material-ui/icons/Apps';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DrawerMenu from './DrawerMenu';
import Profile from './Profile';

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


    render() {
        return (
            <div className="dashBoardPage">

                <div className="navBar">


                    {/* <div className ="menu">
                    
                      <MenuIcon/>

                    </div> */}
                    <DrawerMenu />

                    <div className="googleKeepImage">

                        <img src={googleKeepLogo} alt="keepLogo" />

                    </div>

                    <Typography className="keep">

                        <span style={{ color: "#615c5c" }}> Keep </span>

                    </Typography>

                    <div className="searchBarPlace">
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


                        <SearchIcon style={{ padding: 1 }} />

                        <TextField
                            placeholder="search"
                            onChangeText={(searchString) => { this.setState({ searchString }) }}
                            underlineColorAndroid="transparent"
                            InputProps={{ disableUnderline: true }}
                        />


                    </div>

                    <div className="refresh">
                        <RefreshIcon
                        style={{color:'grey'}} />
                    </div>

                    <div className="viewList">

                        <ViewAgendaOutlinedIcon
                        style={{color:'grey'}}  />
                    </div>

                    <div className="settingsIcon">
                        <SettingsOutlinedIcon 
                        style={{color:'grey'}}  />
                    </div>

                    <div className="appsIcon">
                        <AppsIcon 
                        style={{color:'grey'}}  />
                    </div>

                    <div className="accountPic">
                        <Profile
                            // PropsDashboard={this.props}
                            {...this.props}
                       />
                    </div>

                   

                </div>



            </div>
        );
    }

}

export default Dashboard;