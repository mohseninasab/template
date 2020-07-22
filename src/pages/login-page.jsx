import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { LoginBackground } from "../components/responsive-backgrounds";
import { baseActions } from '../actions'
import { useCheckBoxInput, useFormInput } from "../common-component-methods";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { strings } from "../constants"

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';



// #############################################################################
// component
// #############################################################################

export default function Login (props){

  const language = useSelector(state => state.language);
  const dispatch = useDispatch();
  const classes = useStyles();
  const password = useFormInput("");
  const email = useFormInput("");
  const showPassword = useCheckBoxInput(false);


  // ###########################################################################
  // text constants
  // ###########################################################################

  const {
    loginPageTitle,
    loginPageButton,
    loginPageEmailPlaceHolder,
    loginPagePasswordPlaceHolder,
    loginPageLinkText,
  } = strings[language].texts;

  // ###########################################################################
  // handle the moseDown on password
  // ###########################################################################

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  // ###########################################################################
  // handles login
  // ###########################################################################

  const handleLogin = event => {
    event.preventDefault();
    dispatch(baseActions.login({email: email.value, password: password.value}));
  }

  // ###########################################################################
  // render
  // ###########################################################################

  return (
    <Grid container className={classes.root}>
      <Grid item sm={6} className={classes.backgroundPicture}>
        <LoginBackground/>
      </Grid>
      <Grid item container alignItems="center" justify="center" xs={12} sm={6} className={classes.formContainer}>

        <Grid item xs={12} sm={10} md={8} lg={6} className={classes.formHolder} >
          <Typography color="secondary" variant="h6" className={classes.title}>{loginPageTitle}</Typography>
          

          <form onSubmit={handleLogin} className={classes.form}>

            <TextField
              required
              className={`${classes.textField} ${classes.dense}`}
              label={loginPageEmailPlaceHolder}
              margin="dense"
              variant="outlined"
              type="email"
              {...email}
            />
            
            <TextField
              required
              id="outlined-dense"
              label={loginPagePasswordPlaceHolder}
              className={`${classes.textField} ${classes.dense}`}
              margin="dense"
              variant="outlined"
              {...password}
              type={showPassword.value ? 'text' : 'password'}
              InputProps={{
                endAdornment:(
                  <InputAdornment position="end">
                    <IconButton
                      className={classes.iconButton}
                      aria-label="toggle password visibility"
                      {...showPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword.value ? <FontAwesomeIcon icon='eye' /> : <FontAwesomeIcon icon="eye-slash" />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button
              variant="outlined"
              size="small"
              color="primary"
              aria-label="add"
              className={classes.loginbutton}
              type="submit"
            >
              {loginPageButton}
            </Button>
          </form>
          <Link className={classes.link} to="/register">{loginPageLinkText}</Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles(theme => {
  return {
    root:{
      backgroundColor: theme.palette.backgrounds.primary,
      direction: theme.direction,
      height: "100vh"
    },
    form:{
      marginBottom: 20
    },
    link:{ ...theme.palette.link },
    formHolder:{
      [theme.breakpoints.down('xs')]:{
        padding: 15
      },
      textAlign: "center",
    },
    phoneNumber:{
      marginBottom: 10
    },
    backgroundPicture: {
      [theme.breakpoints.down('xs')]:{
        display: 'none',
      }
    },
    backgroundPictureSecond:{
      [theme.breakpoints.up('sm')]:{
        display: 'none',
      }
    },
    formContainer:{
    },
    textField:{
      width: "100%",
    },
    backgroundImage: {
      height:"45vh"
    },
    title:{
      marginBottom: 5
    },
    questionHolder:{
      marginBottom: 20,
      flexDirection: theme.direction === "rtl" ? "row-reverse" : "row",
    },
    question:{
      paddingRight: 3,
      paddingLeft: 3,
    },
    forgetPassword:{
      marginBottom: 20,
    },
    loginbutton: {
      marginTop: 15
    },
    iconButton:{
      fontSize: 14,
      padding: 5,
      width:28,
      height: 28,
    },
    forgetPasswordText:{
      justifyContent: theme.direction === "rtl" ? "flex-end" : "flex-start",
    },
    dense: {
      marginTop: theme.spacing(2),
    },
  };
});


