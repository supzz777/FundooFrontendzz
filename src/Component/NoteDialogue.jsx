import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
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



const useStyles = makeStyles(theme =>
    ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            display: 'flex',
            width: 275,
            boxShadow: '0px 0px 0px 2px rgba(0,0,0,0.30), 0 2px 5px rgba(0,0,0,0.22) ',
        },
        root2: {
            display: 'flex',
            flexDirection: 'row',
            width: 275,

        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },

        button: {
            display: 'flex',
            marginLeft: '18%',

        },
        fullnote1: {
            display: 'flex',
            flexDirection: 'column',
            display: 'flex',
            width: 550,
            boxShadow: '0px 0px 0px 2px rgba(0,0,0,0.30), 0 2px 5px rgba(0,0,0,0.22) ',
        },
        fullnote2: {
            display: 'flex',
            flexDirection: 'row',
            width: 550,

        },
        dialogbox:{

        },
        dialog: {
        
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
        }


    }),
);

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function NoteDialog() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <Button  onClick={handleClickOpen}>

                                <Paper className={classes.root}>

                            <Paper className={classes.root2}>
                                <InputBase
                                    className={classes.input}
                                    // placeholder="Title"
                                />
                                <IconButton
                                    aria-label="pin note">
                                    <InsertPhotoOutlinedIcon />
                                </IconButton>
                            </Paper>




                            <Paper className={classes.root2}>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Empty Note..."
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                    style={{ fontSize: '25px' }}
                                />

                            </Paper>



                            <Paper className={classes.root2}>

                                <IconButton aria-label="new list">
                                    <AddAlertOutlinedIcon />
                                </IconButton>

                                <IconButton aria-label="new note with drawing">
                                    <PersonAddIcon />
                                </IconButton>

                                <IconButton aria-label="new note with image">
                                    <PaletteIcon />
                                </IconButton>

                                <IconButton aria-label="new list">
                                    <InsertPhotoOutlinedIcon />
                                </IconButton>

                                <IconButton aria-label="new note with drawing">
                                    <ArchiveOutlinedIcon />
                                </IconButton>

                                <IconButton aria-label="new note with image">
                                    <MoreVertIcon />
                                </IconButton>

                               
                            </Paper>


                            </Paper>

      
      </Button>


      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        className={classes.dialogbox}
       
      >
        {/* <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
         
        </DialogTitle>
        <DialogContent>
          
        </DialogContent> */}

        <DialogActions  className={classes.dialog}> 
                {/* <Button autoFocus onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Subscribe
                </Button> */}

                            <Paper className={classes.fullnote1}>

                            <Paper className={classes.fullnote2}>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Title"
                                />
                                <IconButton
                                    aria-label="pin note">
                                    <InsertPhotoOutlinedIcon />
                                </IconButton>
                            </Paper>




                            <Paper className={classes.fullnote2}>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Take a Note..."
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                    style={{ fontSize: 'small' }}
                                />

                            </Paper>



                            <Paper className={classes.fullnote2}>

                                <IconButton aria-label="new list">
                                    <AddAlertOutlinedIcon />
                                </IconButton>

                                <IconButton aria-label="new note with drawing">
                                    <PersonAddIcon />
                                </IconButton>

                                <IconButton aria-label="new note with image">
                                    <PaletteIcon />
                                </IconButton>

                                <IconButton aria-label="new list">
                                    <InsertPhotoOutlinedIcon />
                                </IconButton>

                                <IconButton aria-label="new note with drawing">
                                    <ArchiveOutlinedIcon />
                                </IconButton>

                                <IconButton aria-label="new note with image">
                                    <MoreVertIcon />
                                </IconButton>

                                <IconButton aria-label="new note with drawing">
                                    <UndoIcon />
                                </IconButton>

                                <IconButton aria-label="new note with image">
                                    <RedoIcon />
                                </IconButton>

                                <Button
                                    className={classes.button}>
                                    Close
                                </Button>
                            </Paper>


                            </Paper>

        </DialogActions>
      </Dialog>
    </div>
  );
}