import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 240,
  },
  media: {
    height: 140,
  },
  Button: {
      position:"center",
  }
});

function ServicesCard(props) {
    const classes = useStyles();

    return(  
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image= {props.image}
                        title={props.title}
                        />
                        <CardContent>
                           <h4>{props.title}</h4> 
                        </CardContent>
                    </CardActionArea>
                </Card>         
    );
}

export default ServicesCard;