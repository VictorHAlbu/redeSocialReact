import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { AiFillLock } from "react-icons/ai";


const useStyles = makeStyles({
  root:{
    // display: 'flex',
    // flexDirection: 'row',
    height: '100vh'
  },

  image:{
    backgroundImage: 'url(/images/background.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'center',
    backgroundRepeat: 'none'

  }

  // left:{
    // background: 'blue',
    // flexGrow: 0,
    // flexBasis: '58%',
    // // flexGrow e FlexBasis -  divide a página com % para cada div
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center'
  
  // },

  // right:{
    // background: 'yellow',
    // flexBasis: '42%'
  // },

  // form:{
    // display: 'flex',
    // flexDirection: 'column',
    // margin: '64px 32px',
    // alignItems: 'center'
  // }

})

function SignIn() {
  const classes = useStyles();

  return (

    <Grid container className={classes.root}>

      <Grid 
      item 
      container
      direction="column"
      justify="center"
      alignItems="center" 
      md={7}
      className={classes.image}>

        <Typography style={{color: '#fff', fontSize: '35', lineHeight: '45px'}}>
              <strong>Simplificando a forma de conectar desenvolvedores de softwares!</strong>
        </Typography>
        <Typography variant="body2" style={{color: 'rgb(255,255,255, 0.7)', marginTop: '30', fontSize: 15, lineHeight: '30px'}}>
          Compartilhe seu conhecimento com toda nossa rede de desenvolvimento de Software
        </Typography>
      </Grid>

      <Grid item md={5}>
          <Box display='flex' flexDirection='column' alignItems='center'm={8} >
            <Avatar>
              <AiFillLock/>
            </Avatar>
          </Box>
      </Grid>

    </Grid>


    // flex container
  //  <div className={classes.root}>

  //       {/* Flex item container */}
  //       <div className={classes.left}>
          // <Typography style={{color: '#fff', fontSize: '35', lineHeight: '45px'}}>
          //   <strong>Simplificando a forma de conectar desenvolvedores de softwares!</strong>
          // </Typography>
          // <Typography variant="body2" style={{color: 'rgb(255,255,255, 0.7)', marginTop: '30', fontSize: 15, lineHeight: '30px'}}>
          //   Compartilhe seu conhecimento com toda nossa rede de desenvolvimento de Software
          // </Typography>
  //       </div>

  //     <div className={classes.right}>
  //         <form className={classes.form}>
  //             <h4>Acesso</h4>
  //             <input type="text"/>
  //             <input type="text"/>
  //         </form>
          
  //     </div>


  //  </div>
  )
}

export default SignIn;