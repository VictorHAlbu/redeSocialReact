import React from 'react';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({


})

function Header() {
  return (
    <AppBar position='fixed' color='inherit'>
        <Toolbar>
          {/* <div>
            <a href='/'>Conecta Dev</a>
            <input type='text'></input>
          </div>
          <div>
          <Button color='primary' variant="contained"> Novo Post</Button>;
            <span>img1</span>
            <span>img2</span>
          </div> */}
        </Toolbar>
    </AppBar>
  )
}

export default Header;