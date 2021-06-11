import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import "./style.css";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  titles: {
    marginLeft:'1rem',
    letterSpacing:'3px',
    lineHeight: 1.25,
    whiteSpace: "nowrap",
  },
  // link: {
  //   textDecoration: 'none',
  //   color:"white",
  // }

}));

export default function Heading(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar position="static"  style={{ backgroundColor: "#707070"}}>
          <Toolbar>
            <Typography className={classes.titles}><a href="#" className="TITLE">{props.title1} | </a></Typography>
            <Typography className={classes.titles}><a href="#" className="TITLE">{props.title2} | </a></Typography>
            <Typography className={classes.titles}><a href="#" className="TITLE">{props.title3}</a></Typography>
            {/* <Typography variant="h6" className={classes.titles}>{props.title3}</Typography> */}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}