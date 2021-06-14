import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Drawer from './Drawer.jsx';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Login from './login_form';
import SignUp from './signup_form.jsx';
// -----------------------------------------------------


const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    backgroundColor: "#484848 ",
  },
  grow: {
    flexGrow: 1,
   
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },

    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

// -----------------------------------------------------


export default function Nav(){
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
{/* LOGIN AND SIGN UP FORM IN MOBILE VIEW  */}
      <MenuItem>
      <PopupState variant="power" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                <IconButton color="inherit" {...bindTrigger(popupState)} >
                    <Typography>Log in</Typography> 
                  </IconButton>
  
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin= {{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical:'top',
                      horizontal:'center',
                    }}
                    >
                    <div>
                  <Login />
                </div>

                </Popover>
                </div>

              )}
          </PopupState>
      </MenuItem>

      <MenuItem >
      <PopupState variant="power" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <IconButton color="inherit" {...bindTrigger(popupState)} >
                      <Typography>Sign in</Typography> 
                  </IconButton>
    
                  <Popover
                      {...bindPopover(popupState)}
                      anchorOrigin= {{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical:'top',
                        horizontal:'center',
                      }}
                      >
                      <div>
                        <SignUp />
                      </div>
                  </Popover>
                </div>

              )}
          </PopupState>
      </MenuItem>

    </Menu>
  // ......................................
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static"  className={classes.root}>

        <Toolbar>
        {/* THIS Drawer is for left swipe nav bar */}
          <Drawer />

        {/* LOGO CAN BE KEPT HERE  */}
          <Typography className={classes.title} variant="h6" noWrap>
            Ghar Sewa
          </Typography>

        {/* SEARCH ICON  */}
          <div className={classes.search} >
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          {/* FOR LOG IN AND SIGN UP IN WEB */}
          <div className={classes.grow} />
          
          <div className={classes.sectionDesktop}>
          {/* FOR LOG IN  */}
          <PopupState variant="power" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <IconButton color="inherit" {...bindTrigger(popupState)} >
                    <Typography>
                    Log in
                    </Typography> 
                  </IconButton>
    
                  <Popover
                    {...bindPopover(popupState)}
                      anchorOrigin= {{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                      transformOrigin={{
                      vertical:'top',
                      horizontal:'center',
                    }}
                  >  
                    <div>
                      {/* LOGIN FORM  */}
                      <Login />
                    </div>
                  </Popover>
                </div>

              )}
          </PopupState>

          {/* FOR SIGN UP  */}
          <PopupState variant="power" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <IconButton color="inherit" {...bindTrigger(popupState)} >
                      <Typography>Sign in</Typography> 
                  </IconButton>
    
                  <Popover
                    {...bindPopover(popupState)}
                      anchorOrigin= {{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                      transformOrigin={{
                      vertical:'top',
                      horizontal:'center',
                    }}
                  >
                    <div>
                      <SignUp />
                    </div>
                  </Popover>
                </div>

              )}
          </PopupState>
          </div>
          
          {/* MOBILE VIEW ICON  */}
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon /> 
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
      
      {/* FUNCTION  */}
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
