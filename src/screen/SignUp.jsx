import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import { useHistory } from 'react-router-dom';
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
}));

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const [name, setName] = React.useState('');
  const [document, setDocument] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [admin, setAdmin] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [color, setColor] = React.useState('');

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/auth/signup', {
        name,
        document,
        email,
        key: password,
        admin
      });
      setName('');
      setDocument('');
      setEmail('');
      setPassword('');
      setAdmin('');
      setColor('success');
      setSnackbar(true);
      setSnackbarMessage(res.data.message);
      setTimeout(() => {
        history.push('/signin');
      }, 1000)
    } catch (e) {
      setColor('error');
      setSnackbar(true);
      setSnackbarMessage(e.response.data.error);
    }
  }

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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Crear Usuario
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="nombre"
                name="nombre"
                variant="outlined"
                required
                fullWidth
                id="Nombre"
                label="Nombre"
                autoFocus
                value={name}
                onChange={(v) => setName(v.target.value)}
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Cedula"
                label="cedula"
                name="cedula"
                autoComplete="ci"
                value={document}
                onChange={(v) => setDocument(v.target.value)}
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
                value={email}
                onChange={(v) => setEmail(v.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(v) => setPassword(v.target.value)}
              />
            </Grid>
          </Grid>
          <InputLabel id="demo-controlled-open-select-label">Tipo Perfil </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            value={admin}
            onChange={(v) => setAdmin(v.target.value)}
          >
            <MenuItem value={false}>Estudiante</MenuItem>
            <MenuItem value={true}>Control de Estudio</MenuItem>
          </Select>
          <div className={classes.button}>
            <Button
              className={classes.submit}
              type="submit"
              variant="contained"
              color="primary"
              onClick={(e) => signUp(e)}>
              Registrar
            </Button>
            <Button
              className={classes.submit}
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => history.push('/signin')}>
              Iniciar sesión
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