import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Card1 from './Card'

export default function Services() {
  return (
    <div>
      <Typography variant='h3' align='center' style={{marginTop:25}}> Our Services </Typography>

      <Card1 title="Food Delivery"/>
    </div>
  );
}
