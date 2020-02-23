import React, { Component } from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import PaletteIcon from '@material-ui/icons/Palette';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme =>
  ({ root: {
    
    display: 'flex',
   
    flexDirection: 'column',
    
    display:'flex',
    width: 600,
    boxShadow: '0px 0px 0px 2px rgba(0,0,0,0.30), 0 2px 5px rgba(0,0,0,0.22) ',
     },
    root2: {
        display: 'flex',
   
    flexDirection: 'row',
    
    
    width: 600,

    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    
    button:{
        display: 'flex',
        marginLeft: '25%',
        
    }
    

  }),
);

export default function TakeAFullNote() {
    const classes = useStyles();
  
    return (
      <Paper  className={classes.root}>
        
            <Paper className={classes.root2}>
            <InputBase
            className={classes.input}
            placeholder="Title"
            />
            <IconButton 
             aria-label="pin note">
            <InsertPhotoOutlinedIcon />
            </IconButton>
            </Paper>



      
        <Paper className={classes.root2}>           
        <InputBase
            className={classes.input}
            placeholder="Take a Note..."
            inputProps={{ 'aria-label': 'search google maps' }}
            style={{fontSize:'small'}}
        />
        
        </Paper>



            <Paper className={classes.root2}>
            
            <IconButton   aria-label="new list">
                <AddAlertOutlinedIcon />
            </IconButton>
            
            <IconButton  aria-label="new note with drawing">
                <PersonAddIcon />
            </IconButton>

            <IconButton aria-label="new note with image">
                <PaletteIcon />
            </IconButton>

            <IconButton aria-label="new list">
                <InsertPhotoOutlinedIcon />
            </IconButton>
            
            <IconButton   aria-label="new note with drawing">
                <ArchiveOutlinedIcon />
            </IconButton>

            <IconButton  aria-label="new note with image">
                <MoreVertIcon />
            </IconButton>

            <IconButton  aria-label="new note with drawing">
                <UndoIcon />
            </IconButton>

            <IconButton  aria-label="new note with image">
                <RedoIcon />
            </IconButton>

            <Button 
            className={classes.button}>
                Close
                </Button>
            </Paper>


    </Paper>

    );
  }