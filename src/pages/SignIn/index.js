import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root:{
    display: 'flex',
    flexDirection: 'row',
    height: '100vh'
  },

  left:{
    background: 'blue',
    flexGrow: 0,
    flexBasis: '58%',
    // flexGrow e FlexBasis -  divide a página com % para cada div
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  
  },

  right:{
    background: 'yellow',
    flexBasis: '42%'
  }
})

function SignIn() {
  const classes = useStyles();

  return (
    // flex container
   <div className={classes.root}>
      {/* Flex item container */}
      <div className={classes.left}>
        <Typography style={{color: '#fff', fontSize: 35, lineHeight: '45px'}}>
          <strong>Simplificando a forma de conectar desenvolvedores de softwares!</strong>
        </Typography>
         <Typography variant="body2" style={{color: 'rgb(255,255,255, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px'}}>
           Compartilhe seu conhecimento com toda nossa rede de desenvolvimento de Software
         </Typography>
      </div>

      <div className={classes.right}>
          Form
      </div>


   </div>
  )
}

export default SignIn;