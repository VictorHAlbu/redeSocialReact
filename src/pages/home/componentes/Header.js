import React from 'react';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/Toolbar';
import { Bell } from 'react-feather';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  appBar:{
    boxShadow: 'none',
  },
  img:{
    maxHeight: 55,
  },
  grow:{
    flexGrow: 1
  },
  userSection:{
    display: 'flex',
    alignItems: 'center'
  },
  button:{
    paddingRight: 10
  }, 
  bell:{
    marginRight: 10
  }

})

function Header() {

    const classes = useStyles();

  return (
    <AppBar position='fixed' color='inherit'className={classes.appBar}>
        <Toolbar>
          <img src='/images/logo.png' alt="logo" className={classes.img} />
          <div className={classes.grow}></div>
          <div className={classes.userSection}>
            <Button variant='contained' color='primary' className={classes.button}> 
              Novo Post
            </Button>
            <SvgIcon>
              <Bell></Bell>
            </SvgIcon>
            <Avatar alt="Remy Sharp" src="/" className={classes.bell} />
          </div>
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