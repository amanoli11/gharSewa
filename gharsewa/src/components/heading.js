// import React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import { makeStyles } from '@material-ui/core/styles';
// import Slide from '@material-ui/core/Slide';

// function HideOnScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({ target: window ? window() : undefined });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// HideOnScroll.propTypes = {
//   window: PropTypes.func,
// };

// const useStyles = makeStyles((theme) => ({
//   titles: {
//     marginLeft:'1rem',
//     letterSpacing:'0.1rem',
//     whiteSpace: "nowrap",
//   },

// }));

// export default function Heading(props) {
//   const classes = useStyles();

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <HideOnScroll {...props}>
//         <AppBar position="static"  style={{ backgroundColor: "#707070"}}>
//           <Toolbar>
//             <h2 className={classes.titles}><a href="#" className="TITLE">{props.title1} | </a></h2>
//             <h2 className={classes.titles}><a href="#" className="TITLE">{props.title2} | </a></h2>
//             <h2 className={classes.titles}><a href="#" className="TITLE">{props.title3}</a></h2>
//           </Toolbar>
//         </AppBar>
//       </HideOnScroll>
//       <Toolbar />
//     </React.Fragment>
//   );
// }