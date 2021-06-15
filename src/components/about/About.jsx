import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
import REACTLOGO from '../images/pizza.jpg';

const useStyles = makeStyles({
    root: {
        height: 180,
    },
    container: {
        display: 'flex',
        columnGap: (15),
        marginTop: '1%',
    },
});

export default function About() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);
    return (
        <div>
            <Typography variant='h2' align='center' gutterBottom='true' style={{ marginTop: 75 }}>
                About Us
            </Typography>
            <Typography paragraph='true' gutterBottom='true' align='center'>
                We are new service provider in Jhapa.
            </Typography>
            <Typography paragraph='true' gutterBottom='true' align='center'>
                We provide the fastest service providers all over Jhapa.
            </Typography>

            <Container maxWidth='md' align='center'>
                <div className={classes.root}>

                    <Button  style={{marginTop: 35}} variant='outlined' color='primary' size='large' onClick={() => setChecked(true)}>Our Services Locations</Button>
                    <div className={classes.container}>
                        <Grow in={checked}>
                            <Typography>
                                <ul style={{listStyle:'none'}}>
                                    <li>Birtamode</li>
                                    <li>Bhadrapur</li>
                                    <li>Arjundhara</li>
                                </ul>
                            </Typography>
                        </Grow>
                        
                        <Grow
                            in={checked}
                            {...(checked ? { timeout: 1500 } : {})}
                        >
                            <Typography>
                                <ul style={{listStyle:'none'}}>
                                    <li>Damak</li>
                                    <li>Gauradaha</li>
                                    <li>Mechinagar</li>
                                </ul>
                            </Typography>
                        </Grow>  
                    </div>
                </div>
                    <img src={require('../images/ghar.jpg').default} alt="image" style={{height:'auto', width: '100%', position:''}} />
            </Container>
        </div>
    )
}