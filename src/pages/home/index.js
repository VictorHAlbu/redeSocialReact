import React from 'react';
import Header from './componentes/Header'
import { makeStyles } from '@material-ui/styles';
import Feed from './componentes/Feed'
import NavBar from './componentes/NavBar'

const useStyles = makeStyles({
  root:{
    display: 'flex',
    flexDirection: 'column'
  }, 
  main:{
    height: '100vh',
    display: 'flex',
    width: '1200px',
    margin: '0 auto'
  }
});

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header/>
      <div className="toolbar"></div>
      <main className={classes.main}>
        <Feed/>
        <NavBar/>
      </main>
    </div>
  )
}

export default Home;