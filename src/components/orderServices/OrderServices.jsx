import { Container, Typography } from '@material-ui/core'
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import React from 'react'

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
            width: '35ch',
        },
    },
    btn: {
        margin: theme.spacing(3),
        width: '25ch',
    },
    formControl: {
        margin: theme.spacing(3),
        minWidth: 120
      },
}));

export default function OrderServices() {

    const [selectedDate, setSelectedDate] = useState(Date);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [age, setAge] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const classes = useStyles();
    return (
        <div>
            <Container maxWidth='md'>
                <Typography variant='h3' align='center' gutterBottom='true' style={{ marginTop: 20 }}>Order Services</Typography>

                <Typography variant='subtitle1'>Fill in this form to receive you required services.</Typography>
                <form className={classes.root}>
                    <TextField id="outlined-basic" required id="outlined-required" label="First Name" variant="outlined" />
                    <TextField id="outlined-basic" required id="outlined" label="Last Name" variant="outlined" />
                </form>
                <form className={classes.root}>
                    <TextField id="outlined-basic" required id="outlined" label="Phone number" variant="outlined" />

                    <TextField id="outlined-basic" label="email" type='email' variant="outlined" />
                </form>

                <form className={classes.root}>
                    <TextField id="outlined-basic" required id="outlined" label="Address" variant="outlined" />
                </form>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">Services</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Food Delivery</MenuItem>
                        <MenuItem value={2}>TV Repair</MenuItem>
                        <MenuItem value={3}>Event Photographer</MenuItem>
                        <MenuItem value={4}>Barber</MenuItem>
                        <MenuItem value={5}>Laundry</MenuItem>
                        <MenuItem value={6}>Pet Doctor</MenuItem>
                        <MenuItem value={7}>Painter</MenuItem>
                        <MenuItem value={8}>Furniture Repair</MenuItem>
                        <MenuItem value={9}>Plummer</MenuItem>                        
                    </Select>
                </FormControl>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container className={classes.root}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <p className={classes.root}>date of service you need.</p>
                    </Grid>
                </MuiPickersUtilsProvider>

                <Button variant='contained' color='primary' size='large' className={classes.btn}>
                    Submit
                </Button>
            </Container>
        </div>
    )
}
