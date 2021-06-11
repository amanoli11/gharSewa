import { Grid } from '@material-ui/core'
import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 300,
      '&:hover': {
        background: 'lightGreen',
    },
    },
    btn: {
        background: 'transparent',
        '&:hover': {
            background: 'Red',
            color: 'white',
        },
    },

  });

export default function CardPhoto(props) {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea style={{minHeight: 320}}>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image={props.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button className={classes.btn} size="medium" color="secondary" variant='outlined'>
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            
        </div>
    );
}