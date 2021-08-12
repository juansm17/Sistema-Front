import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

}));

export default function SolicitudDoc() {
  const classes = useStyles();
  
  const [documento, setDocumento ] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setDocumento(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <PostAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Solicitud 
        </Typography>
        <form className={classes.form} noValidate>
        <InputLabel id="demo-controlled-open-select-label">Tipo Documento </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={documento}
          onChange={handleChange}
        >
             <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>constancia </MenuItem>
          <MenuItem value={20}>Expediente</MenuItem>
          <MenuItem value={30}>Notas Certificadas</MenuItem>
        </Select>
        <Grid container spacing={1}>
            
        <Grid item xs={12} >
              <TextField
                autoComplete="fecha"
                name="fecha"
                variant="outlined"
                required
                fullWidth
                id="fecha"
                label="Fecha"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                autoComplete="Descripcion"
                name="descripcion"
                variant="outlined"
                required
                fullWidth
                id="descripcin"
                label="Descripcion"
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
      <Box mt={1}>
      
      </Box>
    </Container>
  );
}