
import React from "react";
import "../Component/Css/PersistantDrawer.css" ;
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineSharpIcon from '@material-ui/icons/DeleteOutlineSharp';
import MenuIcon from '@material-ui/icons/Menu';
import { blue } from "@material-ui/core/colors";



const styles = {
  list:
  {
    width: 250
  },
 
};

class TemporaryDrawer extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
                        <div className="note">
                             <ListItem label="Note" button >
                                <ListItemIcon>
                                        <EmojiObjectsOutlinedIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Notes"/>
                            </ListItem> 
                        </div>    
                        
                        <div className="remainder">
                             <ListItem  label="Remainder" button >
                                <ListItemIcon>
                                        <NotificationsNoneIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Remainders"/>
                            </ListItem>    
                        </div>         
        </List>
                                   
        <Divider />
        <List>
        <div className ="equals">
            <div className="labelTag">LABELS</div>

                    <div className="label">             
                            <ListItem  label="Label" button >
                                <ListItemIcon>
                                        <LabelOutlinedIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Labels"/>
                            </ListItem> 
                    </div>

                    <div className="editLabel">    
                             <ListItem  label="EditLabel" button >
                                <ListItemIcon>
                                        <EditOutlinedIcon/>
                                </ListItemIcon>
                                <ListItemText primary="EditLabels"/>
                            </ListItem>   
                    </div> 
        </div>             
        </List>

        <Divider style={{color:blue}} />

        <List>
                     <div className="archive">    
                             <ListItem  label="Archive" button >
                                <ListItemIcon>
                                        <ArchiveOutlinedIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Archive"/>
                            </ListItem> 
                    </div>        


                    <div className="trash">    
                             <ListItem  label="Trash" button >
                                <ListItemIcon>
                                        <DeleteOutlineSharpIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Trash"/>
                            </ListItem>   
                    </div>

        </List>
      </div>
    );

    console.log(this.state.left);
    return (
      <div>
        <Button
        style={{marginLeft:"-90%"}}
         onClick={this.toggleDrawer("left", true)}><MenuIcon /></Button>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          {sideList}
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
