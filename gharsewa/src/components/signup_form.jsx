import { CardContent, Typography } from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form2: {
    color: 'white',
    margin: '1%',
    marginLeft: '1rem',
  },
  button2: {
    marginLeft: '1.2rem',
  },
  }));

export default function SignUp(){
    const classes = useStyles();

    return(
        <form noValidate autoComplete="off">
          <Card className="root" variant="outlined">
            <CardContent>
                <Typography className="title" variant="h5" component="h2">
                    JOIN US:
                </Typography>

                <TextField
                  id="standard-First Name"
                  label="First Name"
                  className={classes.form2} 
                />  

                <TextField
                  id="standard-Last Name"
                  label="Last Name"
                  className={classes.form2} 
                /> 

                <TextField
                id="standard-Email"
                label="Email"
                className={classes.form2} 
                type='email'
                /> 

                <br></br>

                <TextField
                id="standard-username"
                label="Username"
                className={classes.form2} 
                />

                <br></br> 

                <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                className={classes.form2} 
                /> 

                 <br></br> 

                <TextField
                id="standard-password-input"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                className={classes.form2} 
                />
                
            </CardContent>

            <CardActions>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button2}
                >
                Submit
              </Button>
            </CardActions> 

          </Card>
        </form>

    );
}