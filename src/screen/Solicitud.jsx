import React from 'react';
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
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
  button: {
    '& > *': {
      margin: theme.spacing(1, 1, 0),
    },
  },
  formControl: {
    margin: theme.spacing(10),
    minWidth: 120,
  },
}));

export default function SolicitudDoc() {
  const classes = useStyles();
  const [documentType, setDocumentType] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [snackbar, setSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [color, setColor] = React.useState('');

  const sendRequest = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://tesis-app-server.herokuapp.com/request', {
        documentType,
        description,
        idUser: JSON.parse(localStorage.getItem('user')).id_person,
      });
      setDocumentType('');
      setDescription('');
      setColor('success');
      setSnackbar(true);
      setSnackbarMessage(res.data.message);
    } catch (e) {
      setColor('error');
      setSnackbar(true);
      setSnackbarMessage(e.response.data.message);
    }
  };

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PostAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Crear Solicitud
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <InputLabel id="demo-controlled-open-select-label" className="mb-10" >Tipo Documento </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                value={documentType}
                onChange={(v) => setDocumentType(v.target.value)}
              >
                <MenuItem value={"CONSTANCIA"}>CONSTANCIA</MenuItem>
                <MenuItem value={"CERTIFICADO"}>CERTIFICADO</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} >
              <TextField
                autoComplete="Descripcion"
                name="descripcion"
                variant="outlined"
                className="m-20"
                required
                fullWidth
                id="descripcion"
                label="Descripcion"
                autoFocus
                value={description}
                onChange={(v) => setDescription(v.target.value)}
              />
            </Grid>
          </Grid>
          <div className="m-10">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              className={classes.submit}
              onClick={(e) => sendRequest(e)}
            >
              Enviar
            </Button>
          </div>
        </form>
      </div>
      <Snackbar
        open={snackbar}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <Alert severity={color}>{snackbarMessage}</Alert>
      </Snackbar>
    </Container>
  );
}