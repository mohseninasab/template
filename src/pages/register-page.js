import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { SignUpBackground } from "../components/responsive-backgrounds";
import { baseActions, snackBarActions } from '../actions'
import { useCheckBoxInput, useFormInput } from "../common-component-methods";
import { Link } from 'react-router-dom';
import { strings } from "../constants"
import { ImageInput } from "../components/image-input";

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



// #############################################################################
// component
// #############################################################################

export default function Register (props){
  const dispatch = useDispatch();
  const classes = useStyles();
  const showPassword = useCheckBoxInput(false);
  const language = useSelector(state => state.language);

  
  const first_name = useFormInput("");
  const last_name = useFormInput("");
  const phone_number = useFormInput("");
  const email = useFormInput("");
  const password = useFormInput("");
  const re_password = useFormInput("");
  const [avatar, setAvatar] = useState("");

  // ###########################################################################
  //
  // ###########################################################################

  const { 
    registerPageTitle,
    registerPageLink,
    registerPageFirstNamePlaceHolder,
    registerPageLastNamePlaceHolder,
    registerPageEmailPlaceHolder,
    registerPagePhoneNumberPlaceHolder,
    registerPagePasswordPlaceHolder,
    registerPageRePasswordPlaceHolder,
    registerPageImagePlaceHolder,
    registerPageButton,
  } = strings[language].texts;

  // ###########################################################################
  //
  // ###########################################################################

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  // ###########################################################################
  //
  // ###########################################################################

  const handleRegister = event => {
    event.preventDefault();
    if(password.value === re_password.value){
      const data = {
        first_name: first_name.value,
        last_name: last_name.value,
        phone_number: phone_number.value,
        email: email.value,
        password: password.value,
        avatar
      }
      console.log(data);
      dispatch(baseActions.register(data));
    } 
    else {
      dispatch(snackBarActions.snackBarError("رمز عبورها برابر نیستند"))
    }
  }

  // ###########################################################################

  const handleChangeImage = (data) => {
    setAvatar(data[0]);
  }

  // ###########################################################################
  return (
    <Grid container className={classes.root}>
      <Grid item sm={6} className={classes.backgroundPicture}>
        <SignUpBackground/>
      </Grid>
      <Grid item container alignItems="center" justify="center" xs={12} sm={6} className={classes.formContainer}>
        <Grid item xs={12} sm={10} md={8} lg={6} className={classes.formHolder} >
          <Typography color="primary" variant="h6" className={classes.title}>{registerPageTitle}</Typography>
          <form onSubmit={handleRegister} className={classes.form}>

            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <TextField
                  required
                  className={`${classes.textField} ${classes.dense}`}
                  label={registerPageFirstNamePlaceHolder}
                  margin="dense"
                  variant="outlined"
                  type="text"
                  {...first_name}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <TextField
                  required
                  className={`${classes.textField} ${classes.dense}`}
                  label={registerPageLastNamePlaceHolder}
                  margin="dense"
                  variant="outlined"
                  type="text"
                  {...last_name}
                />
              </Grid>

            </Grid>

            <TextField
              required
              className={`${classes.textField} ${classes.dense}`}
              label={registerPagePhoneNumberPlaceHolder}
              margin="dense"
              variant="outlined"
              type="number"
              {...phone_number}
            />

            <TextField
              required
              className={`${classes.textField} ${classes.dense}`}
              label={registerPageEmailPlaceHolder}
              margin="dense"
              variant="outlined"
              type="email"
              {...email}
            />
            
            <TextField
              required
              label={registerPagePasswordPlaceHolder}
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

            <TextField
              required
              label={registerPageRePasswordPlaceHolder}
              className={`${classes.textField} ${classes.dense}`}
              margin="dense"
              variant="outlined"
              {...re_password}
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

            <ImageInput 
              required
              classes={{root: classes.textFieldImage}} 
              onChange={handleChangeImage}
              label={registerPageImagePlaceHolder}
            />

            <Button
              variant="outlined"
              size="small"
              color="primary"
              aria-label="add"
              className={classes.loginbutton}
              type="submit"
            >
              {registerPageButton}
            </Button>
          </form>

            <Link className={classes.link} to="/login"> 
              {registerPageLink}
            </Link>

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
      minHeight: "100vh"
    },
    formHolder:{
      margin: "20px 0px",
      [theme.breakpoints.down('xs')]:{
        padding: 15
      },
      textAlign: "center",
    },
    form:{
      marginBottom: 25,
    },
    link:{ ...theme.palette.link },
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
      height: "100vh",
      overflow: "auto",
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
    textFieldImage:{
      marginTop: 14
    }
  };
});


