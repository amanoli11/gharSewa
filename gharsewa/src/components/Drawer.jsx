import Box from '@material-ui/core/Box';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DehazeIcon from '@material-ui/icons/Dehaze';
import React,{ useEffect, useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => (
    {
        list: {
            width: 250,
            
        },
        root: {
            backgroundColor:"#484848",
            color:"white",
        }
    }));

export default function Drawer() {

    const classes = useStyles();
    const [open,setOpen] = useState(false);
    return (
        <div>
            <IconButton edge="start"
             color="inherit" 
             aria-label="menu" 
             onClick={() => setOpen(true)}>
             {/* style={{backgroundColor:"white"}} */}
                <DehazeIcon/>
            </IconButton>

            <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={()=> {}}    
            >

            <div className={classes.list}>
                <Box textAlign="center" p={2} className={classes.root} >
                    GHAR SEWA
                </Box>
                <Divider />
                <List>
                    <ListItem button onClick={() => {}}>
                        <ListItemText primary={"SERVICES"}/>
                    </ListItem>
                    <ListItem button onClick={() => {}}>
                        <ListItemText primary={"ABOUT US"}/>
                    </ListItem>
                    <ListItem button onClick={() => {}}>
                        <ListItemText primary={"CONTACT"}/>
                    </ListItem>
                    <ListItem button onClick={() => {}}>
                        <ListItemText primary={"HOME"}/>
                    </ListItem>
                </List>
            </div>
            </SwipeableDrawer>  
        </div>
    );
}
