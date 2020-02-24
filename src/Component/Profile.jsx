import React, { Component } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import "../Component/Css/Profile.css"
import { Divider ,List, ListItem, ListItemText, Badge } from '@material-ui/core';
import { flexbox, border } from '@material-ui/system';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CameraIcon from  '@material-ui/icons/CameraAlt';
import { white } from 'color-name';


const useStyles = makeStyles(theme =>
  ({
    typography: {
      padding: theme.spacing(2),
    },
    list: {
        width: 370,
        height: 400,
        borderRadius: 30,
        top:2,
        marginTop:'10%'

    },
    accountIcon: {
      fontSize: '100px ',
      marginLeft: '130px' ,
      marginTop: '5%',
    },
    badge :{
      marginRight: 130,
      marginTop:5,

    },
    Popover: {
      '& .MuiPopover-paper element.style': {
          top: '60px',
         
      }
    }
          
  }));


// const useStyles = makeStyles({
//     typography: {
//         padding: theme.spacing(2)
//     }
// })


 function Profile(props) {

  let FirstName= localStorage.getItem("FirstName");
  let LastName= localStorage.getItem("LastName");
  let Email= localStorage.getItem("Email");

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      const handleSignOut=()=> 
      {
          console.log(props);

          // localStorage.removeItem("Token");
          // localStorage.removeItem("FirstName");
          // localStorage.removeItem("LastName");
          // localStorage.removeItem("Email");

          localStorage.clear();

         // props.PropsDashboard.history.push("/")
         props.history.push("/")
      }
    
      const popUpList =
    (
      <div  className={classes.list} >

          <div className="part1">

                  <div className= "badgeSpace">

                      <Badge  anchorOrigin={{
                        vertical:"top",
                        horizontal:"right",
                      }}
                      className={classes.badge}
                      overlap="circle"
                      // color="secondary"
                       badgeContent={
                        <CameraIcon  style={{backgroundColor :'white', borderRadius: '5px' , variant:"outlined"}}/>
                       }
                      //  variant="dot"
                      >
                    <AccountCircleIcon 
                    className={classes.accountIcon}
                   />
                    </Badge>

                  </div>  

            <div className="buttonNinfo">
                

                      <div className= "names">{FirstName}  {LastName}</div>

                      <div className ="email">{Email}</div> 

               

                

                <div className= "button"> 

                 <Button 
                  variant="outlined"
                  onClick= {handleClick}
                  style={{borderRadius: '10px' ,height:'60%'}}
                  >Manage Your Google Account
                  </Button> 

                </div>  

            </div>

          </div>

            <Divider/>

              <div className="part2">
                <PersonAddIcon/>

                <span style= {{color:'blue', marginLeft:'5%'}}>Add Another Account </span>


              </div>
           
            
            <Divider/>

            <div className= "part3">

            <Button 
            variant="outlined"
            onClick= {handleSignOut}
            >Sign out</Button>

            </div>

            <Divider/>

            
            <div className= "part4">

              Privacy Policy . Terms of Services

            </div>
              
          

      </div>
    );
   
        return(

            <div>
            <Button aria-describedby={id} 
            
              onClick={handleClick}>
            <AccountCircleIcon fontSize= "large" style= {{color:'grey'}}/>
          </Button>
          <Popover

        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
           style={{top:'8px'}}
          className={classes.Popover}
        >

            {popUpList}
           

        {/* <Typography className={classes.typography}>The content of the Popover.</Typography> */}
      </Popover>
   
            </div>
        ); 

    
}

export default Profile;