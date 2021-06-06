import { Grid } from '@material-ui/core'
import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function CardPhoto(props) {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <Card>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Image of food delivery"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Image of food delivery"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p">
                            We Have the fastest food delivery all over Jhapa.
                        </Typography>

                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}