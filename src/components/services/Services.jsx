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
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { useState } from 'react';
import "./services.scss"

export default function Services() {
  const [show, setshow] = useState(false)
  return (
    <div className='cards'>
      <Container maxWidth='md'>
        <Typography variant='h3' align='center' component='h4'>
          Our Services
        </Typography>

        <Grid container spacing={7} style={{ marginTop: 15 }}>
          <Grid container item xs={12} sm={6} md={4} >
            <Card1 title="Food Delivery" description="We have the fastest food delivery service all over Jhapa." image="https://static.toiimg.com/thumb/msid-81923053,imgsize-41522,width-400,resizemode-4/81923053.jpg" />
          </Grid>
          <Grid container item xs={12} sm={6} md={4} >
            <Card1 title="Barber" description="We have best barbers all over Jhapa." image="https://banner.uclipart.com/20200112/ps/barber-black-and-white-line.png" />
          </Grid>
          <Grid container item xs={12} sm={6} md={4} >
            <Card1 title="Plummer" description="We have the best plummers that work at an affordable prices." image="https://images-platform.99static.com/2WSGPF3uoagfKzx3_5iivs67yck=/13x6:1992x1985/500x500/top/smart/99designs-contests-attachments/67/67661/attachment_67661298" />
          </Grid>
          <Grid container item xs={12} sm={6} md={4} >
            <Card1 title="Laundry" description="We have all sorts of laundry service such as normal laundry, dry clean etc.." image="https://image.freepik.com/free-vector/washing-machine-laundry-set-cartoon-icon-illustration-technology-fashion-icon-concept-isolated-flat-cartoon-style_138676-2150.jpg" />
          </Grid>

          <Grid container item xs={12} sm={6} md={4} >
            <Card1 title="Live Music" description="You can get live concert wherever you want." image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZMriOU5nq2b0AxJS0zfI7JpUb6hxXF-Uid0mbY7mxDoKzMEwXHXy8dNZEM73pp04-lw&usqp=CAU" />
          </Grid>
          
          <Grid container item xs={12} sm={6} md={4} >
            <Card1 title="Event Photographer" description="Get a professional photographer for you important events." image="https://image.freepik.com/free-vector/cartoon-character-photographer_49924-210.jpg" />
          </Grid>
        </Grid>
      </Container>
        {
          show? <Container maxWidth='md'>
  
          <Grid container spacing={7} style={{ marginTop: 15 }}>
            <Grid container item xs={12} sm={6} md={4} >
              <Card1 title="TV Repair" description="We have the fastest food delivery service all over Jhapa." image="https://static.toiimg.com/thumb/msid-81923053,imgsize-41522,width-400,resizemode-4/81923053.jpg" />
            </Grid>
            <Grid container item xs={12} sm={6} md={4} >
              <Card1 title="Painter" description="We have best barbers all over Jhapa." image="https://banner.uclipart.com/20200112/ps/barber-black-and-white-line.png" />
            </Grid>
            <Grid container item xs={12} sm={6} md={4} >
              <Card1 title="Pet Doctor" description="We have the best plummers that work at an affordable prices." image="https://images-platform.99static.com/2WSGPF3uoagfKzx3_5iivs67yck=/13x6:1992x1985/500x500/top/smart/99designs-contests-attachments/67/67661/attachment_67661298" />
            </Grid>
            <Grid container item xs={12} sm={6} md={4} >
              <Card1 title="Furniture Repair" description="We have all sorts of laundry service such as normal laundry, dry clean etc.." image="https://image.freepik.com/free-vector/washing-machine-laundry-set-cartoon-icon-illustration-technology-fashion-icon-concept-isolated-flat-cartoon-style_138676-2150.jpg" />
            </Grid>
  
            <Grid container item xs={12} sm={6} md={4} >
              <Card1 title="Old People Care" description="You can get live concert wherever you want." image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZMriOU5nq2b0AxJS0zfI7JpUb6hxXF-Uid0mbY7mxDoKzMEwXHXy8dNZEM73pp04-lw&usqp=CAU" />
            </Grid>
            
            <Grid container item xs={12} sm={6} md={4} >
              <Card1 title="Web Designer" description="Get a professional photographer for you important events." image="https://image.freepik.com/free-vector/cartoon-character-photographer_49924-210.jpg" />
            </Grid>
          </Grid>
        </Container>:null
        }

        <Grid container direction='column' alignContent='center' style={{marginTop:60}}>
        <Button alignContent='center' color='primary' variant='contained' size='large' onClick={() => setshow(true)}>
          See More
        </Button>
        </Grid>
      
    </div>
  );
}
