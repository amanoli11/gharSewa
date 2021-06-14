import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ServicesCard from './cards.jsx';
import coverImage  from './services.jpg'

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'left',
        letterSpacing:'3px',

    }
}));

export default function NewService(){
    const classes = useStyles();

    return(
        <React.Fragment>
            <div>
            <h3 className={classes.title}>
            NEWLY ADDED SERVICES:
            </h3>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <ServicesCard image ={coverImage} title="Food Delivery" />
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

            <Grid container spacing={2} style={{marginTop:"4%"}}>
                <Grid item xs={3}>
                    <ServicesCard image ={coverImage} title="Food Delivery" />
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
        </React.Fragment>
        
    );
}