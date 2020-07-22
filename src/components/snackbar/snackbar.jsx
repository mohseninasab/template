import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { snackBarActions } from "actions"

import { makeStyles } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import Slide from '@material-ui/core/Slide';

// icons
import ErrorIcon from "@material-ui/icons/Error";
import WarningIcon from "@material-ui/icons/Warning";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

//###########################################################################
// slide transition
//###########################################################################

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

//###########################################################################
// icon variant
//###########################################################################

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

//###########################################################################
// component
//###########################################################################

export default function MainSnackbar(props){
	const { autoHideDuration = 4000, action } = props;
	const classes = useStyles();
	const { variant = "success", open,  message} = useSelector(state => state.snackbar);
	const dispatch = useDispatch();
	const Icon = variantIcon[variant];

	//###########################################################################
	// handle close the snackabar
	//###########################################################################  

  const close = () => {
		dispatch(snackBarActions.snackBarClose());
  }

  //###########################################################################
	// return component
	//###########################################################################  
  return (
    <Snackbar
      anchorOrigin={{vertical: "bottom", horizontal: "left"}}
      open={open || false}
      autoHideDuration={autoHideDuration || 50000}
      onClose={close}
      TransitionComponent={SlideTransition}
    >
      <SnackbarContent
        className={`${classes[variant]} ${classes.root}`}
        classes={{action: classes.action, message: classes.message}}
        aria-describedby="client-snackbar"
        message={
        	(
            <span id="client-snackbar" className={classes.message}>
              <Icon classes={{root: `${classes.icon} ${classes.infoIcon} ${classes.iconVariant}`}} />
             <span className={classes.messageText}>{message}</span>
            </span>
          )
        }
        action={
          action || [
            <IconButton key="close" aria-label="Close" color="inherit" className={classes.closeButton} onClick={close}>
              <CloseIcon className={classes.icon} />
            </IconButton>
          ]
        }
      />
    </Snackbar>
  );
};

//###########################################################################
// styles
//###########################################################################

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: theme.palette.snackbar.success,
  },
  error: {
    backgroundColor: theme.palette.snackbar.error,
  },
  info: {
    backgroundColor: theme.palette.snackbar.info,
  },
  warning: {
    backgroundColor: theme.palette.snackbar.warning,
  },
  icon: {
    fontSize: 22
  },
  iconVariant: {
    opacity: 0.8,
  },
  message: {
    display: "flex",
    minWidth: 240,
    maxWidth: "450px",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "calc(100vw - 80px)"
    }
  },
  messageText:{
    display: "block",
    alignItems: "center",
    fontWeight: "600",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    margin: "0 10px",
  },
  snackbarRoot: {
    backgroundColor: "#111"
  },
  root: {
  	border: theme.palette.snackbar.border,
    padding: "3px 10px",
    borderRadius: "5px",
    display: "flex",
    flexWrap: "nowrap"
  },
  closeButton: {
    padding: 5,
  },
  action:{
    margin: 0,
    padding: 0
  },
}));

//###########################################################################
// export 
//###########################################################################

export { MainSnackbar }
