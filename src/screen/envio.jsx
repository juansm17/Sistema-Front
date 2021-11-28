import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button:{
    '& > *': {
     margin:theme.spacing(1,1,0),
    },
    
  },
}));

export default function EnvioDoc() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Envio del Docuemnto 
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="email"
                name="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                autoFocus
              />
            </Grid>
            
            <Grid item xs={12} >
              <TextField
                autoComplete="Cargar"
                name="Cargar"
                variant="outlined"
                required
                fullWidth
                id="Cagar"
                label="Cargar Documento "
                autoFocus
              />
            </Grid>

            
          </Grid>
          <div className={classes.button}>
          <Button
          
            type="submit"
           
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Enviar
          </Button>

          </div>
          
          
         
        </form>
      </div>
      <Box mt={5}>
      
      </Box>
    </Container>
  );
}