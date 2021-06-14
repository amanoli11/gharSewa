import { CardContent, Typography } from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    form1: {
      color: 'white',
      margin: '1%',
      marginLeft: '1rem',
    },
    button1: {
      marginTop: '1rem',
      marginLeft: '1rem',
      marginBottom: '1rem'
    },
  }));

export default function Login(){
    const classes = useStyles();

    return(
        <form noValidate autoComplete="off">
            <Card className="root" variant="outlined">

                <CardContent>
                    <Typography className="title" variant="h5" component="h2">
                        LOGIN
                    </Typography>
                          
                    <TextField
                        id="standard-username"
                        label="Username"
                        className={classes.form1} 
                    /> 
                    <br></br>  

                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        className={classes.form1} 
                    />

                </CardContent>

                <CardActions>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.button1}
                        >
                        Submit
                    </Button>
                </CardActions>

            </Card>
        </form>
    );
}