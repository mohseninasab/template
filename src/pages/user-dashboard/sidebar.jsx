import React from 'react';
import { history } from '../../helpers';
import { TopBar } from '../../components/top-bar';
import { useSelector } from "react-redux";
import { strings } from "../../constants";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from "@material-ui/icons/Menu";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

// #############################################################################
// component
// #############################################################################

export function SideBar(props){
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const language = useSelector(state => state.language);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedRoute, setSelectedRoute] = React.useState(history.location.pathname);

  // ###########################################################################
  // text constants
  // ###########################################################################

  const {
    userSidebarProfile,
  } = strings[language].texts;

  // ###########################################################################
  // handle drawer
  // ###########################################################################

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // ###########################################################################
  // handle routing
  // ###########################################################################

  const handleRouting = route => () => {
    history.push(route);
    setSelectedRoute(route)
  }

  // ###########################################################################
  // drawer list
  // ###########################################################################

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List className={classes.list}>
        <ListItem
          button
          dense
          className={classes.itemButton}
          onClick={handleRouting("/user-dashboard/profile-page")}
          selected={selectedRoute === '/user-dashboard/profile-page'}
        >
          <ListItemIcon className={classes.iconColor} ><PermIdentityIcon className={classes.profileIcon}/></ListItemIcon>
          <ListItemText className={classes.text} primary={userSidebarProfile} />
        </ListItem>
      </List>
    </div>
  );

  // ###########################################################################
  
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar color="default" position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <TopBar/>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{ paper: classes.drawerPaper}}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </React.Fragment>
  );
}

// #############################################################################
// styles
// #############################################################################

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  red:{
    color: "#FF6B00",
  },
  text:{
    "& > span":{
      fontSize: "0.85rem"  
    }
  },
  toolbar:{
    width: "100%",
    height: 56,
    [theme.breakpoints.down('sm')]: {
      height: 30,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  "@keyframes blink-animation": {
    '0%': { fontSize: "24px !important" },
    '50%': { fontSize: "28px !important" },
    '100%': { fontSize: "24px !important" },
  },
  heart: {
    animation: "$blink-animation 2s infinite",
    animationDelay: '0ms',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  list:{
    color: theme.palette.common.white
  },
  iconColor:{
    color: theme.palette.common.white
  },
  itemButton:{
    minHeight: 45,
  },
  saleIcon:{
    color: "#ff6a46"
  },
  buyIcon:{
    color: "#00ff21"
  },
  passwordIcon:{
    color: "#FFB200",
  },
  profileIcon:{
    color: "#13B1FF",
  }
}));