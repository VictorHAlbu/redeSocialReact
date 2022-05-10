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
import { useNavigate } from 'react-router-dom'
import axios from '../../utils/axios'


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
  const navigate = useNavigate();

  async function handleSignIn() {

    const response = await axios.post('api/home/login', { email: 'vh12victor@gmail.com', password: 'admin'});
    console.log(response)
  }

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
              className={classes.button}
              onClick={handleSignIn} >
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

  )
}

export default SignIn;