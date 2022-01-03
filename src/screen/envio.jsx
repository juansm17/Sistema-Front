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
import axios from 'axios';
import { useLocation } from 'react-router-dom';
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
}));

export default function EnvioDoc() {
  const classes = useStyles();
  const location = useLocation();
  const [email, setEmail] = React.useState('');
  const [document, setDocument] = React.useState('');
  const [snackbar, setSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [color, setColor] = React.useState('');

  const approveRequest = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('document', document);
    formData.append('email', email);
    formData.append('admin', true);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    try {
      const res = await axios.put(`http://localhost:5000/request/status/mail/${location.state.idRequest}`,
        formData, config);
      setEmail('');
      setDocument(undefined);
      setColor('success');
      setSnackbar(true);
      setSnackbarMessage(res.data.message);
    } catch (e) {
      setColor('error');
      setSnackbar(true);
      setSnackbarMessage(e.response.data.message);
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
          Envío del Documento
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
                label="Correo electrónico"
                autoFocus
                value={email}
                onChange={(v) => setEmail(v.target.value)}
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                autoComplete="Cargar"
                name="Cargar"
                variant="outlined"
                required
                fullWidth
                id="Cargar"
                autoFocus
                type='file'
                onChange={(v) => setDocument(v.target.files[0])}
              />
            </Grid>
          </Grid>
          <div className={classes.button}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => approveRequest(e)}
            >
              Aprobar
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