import React from 'react';
import { IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { Menu, CreateOutlined } from '@material-ui/icons';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineSharpIcon from '@material-ui/icons/DeleteOutlineSharp';
import { makeStyles } from '@material-ui/core/styles';
import {connect, useSelector, useDispatch} from 'react-redux'
import {toggleDrawer} from '../Redux/Action'
import "../Component/Css/PersistantDrawer.css" ;


const useStyle = makeStyles({
    list: {
        width: 260
    },
    drawer: {
        '& .MuiDrawer-paper': {
            top: '3.8em'
        }


    }
})

const DrawerMenu = (props) => {
    const classes = useStyle()

const [open, setOpen] = React.useState(false) //const [open (state),setOpen (setState)]=destructing


        /*   // method for declaring states for function Component
            // const [state, setState] = React.useState({
            //     fistName: '',
            //     lastName: ''
            // })

            // setState({fistName: 'Aditya'})

        */   

    
    const handleDrawer = () => {
        setOpen(!open)
    }

    const sideList = (
        // <div
        //     className={classes.list}
        //     role="presentation"

        // >
        //     <List>
        //         {['Inbox', 'Starred'].map((text, index) => (
        //             <ListItem button key={text}>
        //                 <ListItemIcon>{index % 2 === 0 ? <EmojiObjectsOutlinedIcon /> : <NotificationsNoneIcon />}</ListItemIcon>
        //                 <ListItemText primary={text} />
        //             </ListItem>
        //         ))}
        //     </List>
        //     <Divider />
        //     <List>
        //         {['Inbox'].map((text, index) => (
        //             <ListItem button key={text}>
        //                 <ListItemIcon><CreateOutlined /></ListItemIcon>
        //                 <ListItemText primary={text} />
        //             </ListItem>
        //         ))}
        //     </List>
        //     <Divider />
        //     <List>
        //         {['All mail', 'Trash'].map((text, index) => (
        //             <ListItem button key={text}>
        //                 <ListItemIcon>{index % 2 === 0 ? <ArchiveOutlinedIcon /> : <DeleteOutlineSharpIcon />}</ListItemIcon>
        //                 <ListItemText primary={text} />
        //             </ListItem>
        //         ))}
        //     </List>
        // </div>

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

        <Divider />

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

    return (
        <>
            <IconButton
                onClick={() => {
                    handleDrawer()
                    console.log('open', open);
                }}>
                <Menu />
            </IconButton>
            <Drawer
                open={open}
                variant='persistent'
                className={classes.drawer}
            >
                {sideList}
            </Drawer>
        </>
    );
};

export default DrawerMenu

//----------------------------------------------------------------------------------------------------//
                                // USING REDUX (Function COMPONENT) //

/* import React from 'react';
import { IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { Menu, CreateOutlined } from '@material-ui/icons';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineSharpIcon from '@material-ui/icons/DeleteOutlineSharp';
import { makeStyles } from '@material-ui/core/styles';
import {connect, useSelector, useDispatch} from 'react-redux'
import {toggleDrawer} from '../Redux/Action'

const useStyle = makeStyles({
    list: {
        width: 260
    },
    drawer: {
        '& .MuiDrawer-paper': {
            top: '3.8em'
        }


    }
})

const DrawerMenu = (props) => {
    const classes = useStyle()

    const [open, setOpen] = React.useState(false) // const [open (state),setOpen (setState)]=destructing


    // const [state, setState] = React.useState({
    //     fistName: '',
    //     lastName: ''
    // })


    // setState({fistName: 'Aditya'})

    //function Component
    // const openDrawer = useSelector(state=>state.openDrawer)
    // const dispatch = useDispatch()

    const handleDrawer = () => {
        setOpen(!open)
    }

    const sideList = (
        <div
            className={classes.list}
            role="presentation"

        >
            <List>
                {['Inbox', 'Starred'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <EmojiObjectsOutlinedIcon /> : <NotificationsNoneIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Inbox'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon><CreateOutlined /></ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <ArchiveOutlinedIcon /> : <DeleteOutlineSharpIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <>
            <IconButton
                onClick={() => {
                    handleDrawer()
                   // props.toggleDrawer(); for class comp
                    // dispatch(toggleDrawer) //for function comp
                    console.log('open', open);
                }}>
                <Menu />
            </IconButton>
            <Drawer
            //  open={props.openDrawer} ; for class comp
                // open={openDrawer}  ////for function comp
                open={open}
                variant='persistent'
                className={classes.drawer}
            >
                {sideList}
            </Drawer>
        </>
    );
};

// const mapStateToProps=(state) =>{

// return {
//     openDrawer: state.openDrawer
// }
// }

// const mapDispatchToProps=(dispatch)=> {
     
//     return {
//         toggleDrawer: ()=> dispatch(toggleDrawer)

//     }
// }


// export default connect(mapStateToProps,mapDispatchToProps) (DrawerMenu) ;
export default DrawerMenu

 */

//----------------------------------------------------------------------------------------------------//
                                // USING REDUX (Class COMPONENT) //


                              
/* import React from 'react';
import { IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { Menu, CreateOutlined } from '@material-ui/icons';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineSharpIcon from '@material-ui/icons/DeleteOutlineSharp';
import { makeStyles } from '@material-ui/core/styles';
import {connect, useSelector, useDispatch} from 'react-redux'
import {toggleDrawer} from '../Redux/Action'

const useStyle = makeStyles({
    list: {
        width: 260
    },
    drawer: {
        '& .MuiDrawer-paper': {
            top: '3.8em'
        }


    }
})

const DrawerMenu = (props) => {
    const classes = useStyle()

    const [open, setOpen] = React.useState(false) // const [open (state),setOpen (setState)]=destructing


    // const [state, setState] = React.useState({
    //     fistName: '',
    //     lastName: ''
    // })


    // setState({fistName: 'Aditya'})

    //function Component
    // const openDrawer = useSelector(state=>state.openDrawer)
    // const dispatch = useDispatch()

    const handleDrawer = () => {
        setOpen(!open)
    }

    const sideList = (
        <div
            className={classes.list}
            role="presentation"

        >
            <List>
                {['Inbox', 'Starred'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <EmojiObjectsOutlinedIcon /> : <NotificationsNoneIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Inbox'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon><CreateOutlined /></ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <ArchiveOutlinedIcon /> : <DeleteOutlineSharpIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <>
            <IconButton
                onClick={() => {
                    handleDrawer()
                   // props.toggleDrawer(); for class comp
                    // dispatch(toggleDrawer) //for function comp
                    console.log('open', open);
                }}>
                <Menu />
            </IconButton>
            <Drawer
            //  open={props.openDrawer} ; for class comp
                // open={openDrawer}  ////for function comp
                open={open}
                variant='persistent'
                className={classes.drawer}
            >
                {sideList}
            </Drawer>
        </>
    );
};

// const mapStateToProps=(state) =>{

// return {
//     openDrawer: state.openDrawer
// }
// }

// const mapDispatchToProps=(dispatch)=> {
     
//     return {
//         toggleDrawer: ()=> dispatch(toggleDrawer)

//     }
// }


// export default connect(mapStateToProps,mapDispatchToProps) (DrawerMenu) ;
export default DrawerMenu

 */  