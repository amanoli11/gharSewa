import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import logo  from './logo.jpg'
import facebook  from './facebook.png'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './footer.css';

function Footer(){
    const [isShown, setIsShown] = useState(false)

    return(
        <div className="footer">
            <Grid container>
            <Grid item xs={3}  >
            <div className="logo"><img src={logo} alt='img'/></div>
            </Grid>

            <Grid item xs={3}>
            <List dense="dense">
            <div className="heading"><h3>COMPANY</h3></div>
                <ListItem>
                    <ListItemText primary="lorem lorem lorem"></ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText primary="lorem lorem lorem"></ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText primary="lorem lorem lorem"></ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText primary="lorem lorem lorem"></ListItemText>
                </ListItem>
            </List>
            
            <List dense="dense">
            <div className="heading"><h3>COMPANY</h3></div>
                <ListItem>
                    <ListItemText primary="lorem lorem lorem"></ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText primary="lorem lorem lorem"></ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText primary="lorem lorem lorem"></ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText primary="lorem lorem lorem"></ListItemText>
                </ListItem>
            </List>  
            </Grid>

            <Grid item xs={3}>
            <List dense="dense">
            <div className="heading"><h3>COMPANY</h3></div>
                <ListItem>
                    <ListItemText primary="lorem lorem lorem"></ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText primary="lorem lorem lorem"></ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText primary="lorem lorem lorem"></ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText primary="lorem lorem lorem"></ListItemText>
                </ListItem>
            </List> 


            <List dense="dense">
            <div className="heading"><h3>COMPANY</h3></div>
                <ListItem>
                    <ListItemText primary="lorem lorem lorem"></ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText primary="lorem lorem lorem"></ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText primary="lorem lorem lorem"></ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText primary="lorem lorem lorem"></ListItemText>
                </ListItem>
            </List> 
            </Grid>

            <Grid item xs={3} diection="row">
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={4} className="social-media1" >
                    <img src={facebook} alt='img'
                    onMouseEnter={() => setIsShown(true)} 
                    onMouseLeave={() => setIsShown(false)}
                    />
                    {isShown && (
                        <div className="sites_name">
                        Facebook
                        </div>
                    )}
                    </Grid>
                    <Grid item xs={4} className="social-media2" ><img src={facebook} alt='img'
                    onMouseEnter={() => setIsShown(true)} 
                    onMouseLeave={() => setIsShown(false)}
                    />
                    {isShown && (
                        <div className="sites_name">
                        Twitter
                        </div>
                    )}</Grid>
                    <Grid item xs={4} className="social-media3" ><img src={facebook} alt='img'
                    onMouseEnter={() => setIsShown(true)} 
                    onMouseLeave={() => setIsShown(false)}
                    />
                    {isShown && (
                        <div className="sites_name">
                        Instragram
                        </div>
                    )}
                    </Grid>
                </Grid>

                <Grid container direction="row" justify="center"alignItems="center">
                    <Grid item xs={4} className="social-media4" ><img src={facebook} alt='img' 
                     onMouseEnter={() => setIsShown(true)} 
                    onMouseLeave={() => setIsShown(false)}
                    />
                    {isShown && (
                        <div className="sites_name">
                        Linkedin
                        </div>
                    )}
                    </Grid>
                    <Grid item xs={4} className="social-media5" ><img src={facebook} alt='img'
                     onMouseEnter={() => setIsShown(true)} 
                    onMouseLeave={() => setIsShown(false)}
                    />
                    {isShown && (
                        <div className="sites_name">
                        Email
                        </div>
                    )}
                    </Grid>
                    <Grid item xs={4} className="social-media6" ><img src={facebook} alt='img'
                     onMouseEnter={() => setIsShown(true)} 
                    onMouseLeave={() => setIsShown(false)}
                    />
                    {isShown && (
                        <div className="sites_name">
                        Twitter
                        </div>
                    )}
                    </Grid>
                </Grid>
                
            </Grid>
                
            </Grid>
    </div>
    
    );
}
export default Footer;