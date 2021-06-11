import './App.css';
import Nav from './components/Nav.jsx'
import Heading from './components/heading.js'
import Grid from '@material-ui/core/Grid';
import PopularServices from './components/popular_services.jsx';
import AvailableService from './components/available_services.jsx';
import NewService from './components/new_Services';
import Footer from './components/footer.jsx';

import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function App(props) {
  var ArrayPopularServices =['Food Delivery','Barber','Plummer','Laundry','Live Music','Event Photographer'];

  return (
    <div className="App">  
    
    <Grid container direction='column'>
      <Grid item id="back-to-top-anchor"><Nav /></Grid>
      <Grid item> <Heading title1='FOOD DELIVERY' title2='HOME SERVICES' title3='TOOLS DELIVERY'/></Grid>
      <Grid item><PopularServices popularServices={ArrayPopularServices}/> </Grid>
      <Grid item container>
        <Grid item xs={0} sm={1} />
        <Grid item xs={10}>
        <NewService /> 
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
      <Grid item container style={{marginTop: "4%"}}>
        <Grid item xs={0} sm={1} />
        <Grid item xs={10}>
        
        <AvailableService />   
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
    </Grid>

    <Toolbar id="back-to-top-anchor"/>

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    <Footer/>
    </div>
  );
}

export default App;
