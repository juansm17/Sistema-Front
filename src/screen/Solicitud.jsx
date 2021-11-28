import React from 'react';

import { useForm } from '../hooks/useForm'

import "../styles/index.css"
 
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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
    margin: theme.spacing(10),
    minWidth: 120,
  },

}));

export default function SolicitudDoc() {
  const classes = useStyles();
  
  const [documento, setDocumento ] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const  {values, handleInputChange } = useForm({
    fecha : "",
    descripcion : ""
  })
  const handleChange = (event) => {
    setDocumento(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleSubmit = (e) =>{
    e.preventDefault()
    const data = {
      documento,
      ...values
    }
    console.log(data)
  }
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
        <form className={classes.form} noValidate onSubmit = { handleSubmit }>
        <Grid container spacing={3}>
          <Grid item xs={12}>
          <InputLabel id="demo-controlled-open-select-label" className = "mb-10" >Tipo Documento </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={documento}
            onChange={handleChange}
          >
            
            <MenuItem value={"constancia"}>Constancia </MenuItem>
            <MenuItem value={"expediente"}>Expediente</MenuItem>
            <MenuItem value={"notas"}>Notas Certificadas</MenuItem>
          </Select>
          </Grid>
          <Grid item xs={12} >
              <TextField
                autoComplete="fecha"
                name="fecha"
                variant="outlined"
                className = "m-20"
                required
                fullWidth
                id="fecha"
                onChange = { handleInputChange }
                label="Fecha"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                autoComplete="Descripcion"
                name="descripcion"
                variant="outlined"
                className = "m-20"
                required
                fullWidth
                id="descripcion"
                onChange = { handleInputChange }
                label="Descripcion"
                autoFocus
              />
            </Grid>
          </Grid>
          <div className="m-10">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size = "large"
              className={classes.submit}
            >
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}