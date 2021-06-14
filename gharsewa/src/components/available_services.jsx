import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import ServicesCard from './cards.jsx';
import coverImage  from './services.jpg'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'left',
        letterSpacing:'3px',
    },
    root: {
        marginTop: "4%",
    }
}));
export default function AvailableService(){
    const classes = useStyles();

    return(
        <React.Fragment>
            <div>
                <h3 className={classes.title}>AVAILABLE SERVICES:
                </h3>
            </div>

            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <ServicesCard image ={coverImage} title="Plummer"/>
                    </Grid>
                    <Grid item xs={3}>
                        <ServicesCard image ={coverImage} title="Electrical" />
                    </Grid>
                    <Grid item xs={3}>
                        <ServicesCard image ={coverImage} title="Electrical" />
                    </Grid>
                    <Grid item xs={3}>
                        <ServicesCard image ={coverImage} title="Electrical" />
                    </Grid>
                </Grid>
            </div>
            
{/* ---------------------------------------------------------------------- */}
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <ServicesCard image ={coverImage} title="Plummer" />
                    </Grid>
                    <Grid item xs={3}>
                        <ServicesCard image ={coverImage} title="Electrical" />
                    </Grid>
                    <Grid item xs={3}>
                        <ServicesCard image ={coverImage} title="Electrical" />
                    </Grid>
                    <Grid item xs={3}>
                        <ServicesCard image ={coverImage} title="Electrical" />
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>   
    );
}