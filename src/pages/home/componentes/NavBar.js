import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles({
  root:{
    padding: 16,
    width: 275
  }

});


function NavBar() {
 
  const classes = useStyles();

  return(
    <Paper className={classes.root}>
      NavBar
    </Paper>
  )
}

export default NavBar;