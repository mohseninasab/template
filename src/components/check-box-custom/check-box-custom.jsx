import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles'


// #############################################################################
// component
// #############################################################################

export function CheckBoxCustome({ onChange, name = "", checked = false, label = "", children}){
  const classes = useStyles();
  return (
    <span className={`${classes.root} ${checked ? classes.checked: ''}`}>
      <input name={name} onChange={onChange} checked={checked} className={classes.input} aria-label={label} type="checkbox"/>
      <span className={`${classes.iconHolder} ${checked ? classes.checkedLabel : ''}`}>{children}</span>
      <span className={`${classes.label} ${checked ? classes.checkedLabel : ''}`}>{label}</span>
    </span>
  );
}

// #############################################################################
// styles
// #############################################################################

const useStyles = makeStyles(theme => ({
  root:{
    fontFamily: theme.typography.fontFamily,
    direction: 'ltr',
    border: `2px solid ${colors.gray.lighten_3}`,
    position: 'relative',
    borderRadius: 4,
    padding: 4,
    display: 'flex',
    alignItems: 'center',
    "&:focus-within":{
      border: `2px solid ${colors.blue.lighten_1} !important`,
      boxShadow: '0 0 0 3px #69FF1930',
    },
    "&:focus-within > span > svg":{
      color: colors.gray.lighten_1,
    },
    "&:hover": {
      background: 'rgba(0, 0, 0, 0.03)',
      border: `2px solid ${colors.gray.lighten_2}`,
      cursor: 'pinter',
    }
  },
  checked:{
    border: `2px solid ${colors.green.lighten_4} !important`,
  },
  input: {
    opacity: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    margin: 0,
    left: 0,
  },
  label:{
    paddingLeft: 10,
    color: theme.palette.text.secondary,
  },
  checkedLabel:{
    color: colors.green.lighten_4,
    "& > svg":{
      color: colors.green.lighten_4 + " !important"
    }
  },
  iconHolder:{
    "& > svg":{
      color: theme.palette.text.secondary,
    }
  }
}));