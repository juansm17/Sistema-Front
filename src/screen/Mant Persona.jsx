import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';
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

export default function MantPersona() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          < PersonIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Mantenimiento Persona  
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="cedula"
                name="cedula"
                variant="outlined"
                required
                fullWidth
                id="cedula"
                label="Cedula"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} >
            <TextField
                autoComplete="fname"
                name="nombre"
                variant="outlined"
                required
                fullWidth
                id="nombre"
                label="Nombre"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="apellido"
                label="Apellido"
                name="apellido"
                autoComplete="apellido"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                 variant="outlined"
                 required
                 fullWidth
                 id="email"
                 label="Email Address"
                 name="email"
                 autoComplete="email"
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
            Eliminar
          </Button>
          <Button 
           className={classes.button}
            type="submit"
            
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Guadar
          </Button>
          <Button
            type="submit"
            
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Buscar
          </Button>
          </div>
          
          
         
        </form>
      </div>
      <Box mt={5}>
      
      </Box>
    </Container>
  );
}