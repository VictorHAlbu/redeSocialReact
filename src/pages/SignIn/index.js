import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { AiFillLock } from "react-icons/ai";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles({
  root:{
    // display: 'flex',
    // flexDirection: 'row',
    height: '100vh'
  },

  image:{
    backgroundImage: 'url(/images/background.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'none'

  }, 
  avatar:{
    background: 'blue',
    marginBottom: '12px'
  },
  button:{
    marginTop: '10px'
  },
  form:{
    margin: '10px, 15px'
  },
  copyright:{
    display: 'block'
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


function Copyright() {
  return(
    <Typography variant="body2" aling="center">
      {'Copyright '}
      <a color="inherit" href="https://github.com/VictorHAlbu">
        Victor Hugo
      </a>{' '}
      {new Date().getFullYear()}
    </Typography>
  )
}

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
            <Avatar className={classes.avatar}>
              <AiFillLock/>
            </Avatar>
            <Typography variant="h5">
              Acesso: 
            </Typography>
            <form className={classes.form}>
              <TextField
                variant="outlined"
                // outlined = contorno no textfield
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-emal"
                name="email"
                autoComplete="email"
                autoFocus
              />
                
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button fullWidth
              variant="contained"
              color="primary"
              className={classes.button}>
                Entrar
              </Button>
              <Grid container>
                <Grid item>
                  <Link>Esqueceu sua senha?</Link>
                </Grid>
                <Grid item>
                  <Link>  Não tem uma conta? Registre-se</Link>                  
                </Grid>
              </Grid>
            </form>
            <Copyright className={classes.copyright}/>
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