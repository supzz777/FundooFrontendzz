import React, { Component } from 'react';
import "./Css/Dashboard.css";
import MenuIcon from '@material-ui/icons/Menu';
import googleKeepLogo from '../Image/googleKeepLogo.png'
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DrawerMenu from './DrawerMenu';
import Profile from './Profile';
import { fade ,makeStyles } from '@material-ui/core/styles';







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
          


            <div className="dashBoardPage" style={{ height: 65}}>

                <div className="navBar">


                    {/* <div className ="menu">
                    
                      <MenuIcon/>

                    </div> */}
                    <DrawerMenu />

                    <div className="googleKeepImage">

                        <img src={googleKeepLogo} alt="keepLogo" />

                    </div>

                    <div className="keep">

                       Keep

                    </div>

                    <div className="searchBarPlace">
                       
                        <div className="searchIcon">
                        <SearchIcon style={{ padding: 1 ,display: 'flex' ,justifyContent: 'flexStart',marginTop:'11%' ,marginLeft:'152%'}}  />
                        </div>

                    <div className="searchBox">
                        <TextField
                            placeholder="Search"
                            onChangeText={(searchString) => { this.setState({ searchString }) }}
                            underlineColorAndroid="transparent"
                            InputProps={{ disableUnderline: true }}
                            style={{marginLeft:'25%'}}
                        />
                    </div>

                                {/* <div className={this.classes.search}>
                                <div className={this.classes.searchIcon}>
                                <SearchIcon />
                                </div>
                                <InputBase
                                placeholder="Search…"
                                // classes={{
                                //     root: this.classes.inputRoot,
                                //     input: this.classes.inputInput,
                                // }}
                                inputProps={{ 'aria-label': 'search' }}
                                />
                            </div> */}


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