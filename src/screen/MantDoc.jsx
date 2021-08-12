import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FindInPageIcon from '@material-ui/icons/FindInPage';
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

export default function MantDoc() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <FindInPageIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Mantenimiento  Documento 
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="id documento"
                name="id documento"
                variant="outlined"
                required
                fullWidth
                id="documento"
                label="Id Documento"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} >
            <TextField
                autoComplete="descripcion"
                name="descripcion"
                variant="outlined"
                required
                fullWidth
                id="descripcion"
                label="Desripcion"
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