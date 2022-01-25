import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';



const useStyles = makeStyles({
  root:{
    padding: 16,
    width: 275
  },
  button:{
    width: "100%"
  }

});

const tags = [
  {id: 1, name: 'ractjs'},
  {id: 2, name: 'javascript'},
  {id: 3, name: 'dotnet'},
  {id: 1, name: 'php'},
  {id: 1, name: 'materialdesing'},
  {id: 1, name: 'webdev'}

]


function NavBar() {
 
  const classes = useStyles();

  return(
    <Paper className={classes.root}>
      <Button variant="outlined" color="secondary" className={classes.button}>Registrar Grátis</Button>
      <ListSubheader>{'Tags em Alta'}</ListSubheader>
    </Paper>
  )
}

export default NavBar;