import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import coverImage  from './services.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        height:"100%",
        width:"95%",
        boxShadow: 'rgba(255, 0, 0, 0.117647) 0px 1px 6px, rgba(255, 0, 0, 0.117647) 0px 1px 4px',
        borderRadius: 14,
    },
    titles: {
      textAlign:"left",
      letterSpacing:'3px',
    },
    services: {
        textAlign:"left",
        marginLeft:"6%",
        marginTop:"4%",
        letterSpacing:'1px',
    },   
  }));

  
export default function PopularServices(props){
    const classes = useStyles();

    const listServices = props.popularServices;
    const listItems = listServices.map((listService) => 
        // <p><a href="#" style={{textDecoration:"none"}}>{listService}</a></p>
        <p>{listService}</p>
    )

    return(
        <Grid container>
            <Grid item xs={0} sm={1}/>

            <Grid item xs={5} sm={2}>
               <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.titles} variant="h6">
                        Our Services:
                        </Typography>

                        <Typography className={classes.services}>
                            {listItems}
                        </Typography>
                    </CardContent>
               </Card>
            </Grid>

            <Grid item xs={7} sm={8} >
                <img src={coverImage} height="100%" width="100%" className={classes.root}/>
            </Grid>

            <Grid item xs={0} sm={1} />  
                    
        </Grid>
    );
}