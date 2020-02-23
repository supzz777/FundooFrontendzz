import React, { Component } from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

import LibraryAddCheckOutlinedIcon from '@material-ui/icons/LibraryAddCheckOutlined';
import CreateIcon from '@material-ui/icons/Create';
import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined';


const useStyles = makeStyles(theme =>
  ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 600,
      position:"relative",
      display:'flex',
      
     
      boxShadow: '0px 0px 0px 2px rgba(0,0,0,0.30), 0 2px 5px rgba(0,0,0,0.22) ',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },

  }),
);

export default function TakeANote() {
    const classes = useStyles();
  
    return (
      <Paper component="form" className={classes.root}>
        
        <InputBase
          className={classes.input}
          placeholder="Take a Note..."
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="new list">
          <LibraryAddCheckOutlinedIcon />
        </IconButton>
        
        <IconButton type="submit" className={classes.iconButton} aria-label="new note with drawing">
          <CreateIcon />
        </IconButton>

        <IconButton type="submit" className={classes.iconButton} aria-label="new note with image">
          <InsertPhotoOutlinedIcon />
        </IconButton>

      </Paper>
    );
  }