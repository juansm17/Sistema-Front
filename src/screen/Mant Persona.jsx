import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from '@material-ui/core';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MantPersona() {
  const history = useHistory();
  const [id, setId] = React.useState(0);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [document, setDocument] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);
  const [snackbar, setSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [color, setColor] = React.useState('');

  React.useEffect(() => {
    const { id_person } = JSON.parse(localStorage.getItem('user'));
    getUser(id_person);
    setId(id_person);
  }, []);

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar(false);
  };

  const getUser = async (idUser) => {
    const res = await axios.get(`http://localhost:5000/user/${idUser}`);
    const { name, email, document } = res.data.user;
    setName(name);
    setEmail(email);
    setDocument(document);
  };

  const enableEditUser = () => {
    setDisabled(false);
  };

  const cancelEditUser = () => {
    setDisabled(true);
  };

  const editUser = async () => {
    setDisabled(true);
    try {
      const res = await axios.patch(`http://localhost:5000/user/${id}`, {
        name,
        email,
        document
      });
      setColor('success');
      setSnackbar(true);
      setSnackbarMessage(res.data.message);
    } catch (e) {
      setColor('error');
      setSnackbar(true);
      setSnackbarMessage(e.response.data.message);
    }
  };

  const deleteUser = async () => {
    try {
      const res = await axios.delete(`http://localhost:5000/user/${id}`);
      if (res.data.status === 200) {
        history.push('/signin');
        return;
      }
    } catch (e) {
      setColor('error');
      setSnackbar(true);
      setSnackbarMessage(e.response.data.message);
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* <CssBaseline />
      <Avatar className={classes.avatar}>
        <PostAddIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Solicitudes
      </Typography> */}
      <Card sx={{ width: '50%', marginTop: 10, backgroundColor: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 5 }}>
          <Typography component="h1" variant="h5">
            Información personal
          </Typography>
        </div>
        <hr style={{ width: '100%', color: 'gray' }} />
        <CardContent style={{ marginTop: 30 }}>
          <TextField disabled={disabled} value={name} label='Nombre' onChange={e => setName(e.target.value)} />
          <TextField disabled={disabled} value={email} label='Correo electrónico' onChange={e => setEmail(e.target.value)} />
        </CardContent>
        <CardActions>
          {
            disabled ?
              <>
                <Button color='primary' onClick={enableEditUser}>Editar Usuario</Button>
                <Button style={{ color: '#d93442' }} onClick={deleteUser}>Eliminar Usuario</Button>
              </>
              :
              <>
                <Button color='primary' onClick={editUser}>Confirmar</Button>
                <Button style={{ color: '#d93442' }} onClick={cancelEditUser}>Cancelar</Button>
              </>
          }
        </CardActions>
      </Card>
      <Snackbar
        open={snackbar}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <Alert severity={color}>{snackbarMessage}</Alert>
      </Snackbar>
    </div>
  );
}
