import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { TextField } from '@material-ui/core';
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
    width: 1000, // Fix IE 11 issue.
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
    margin: theme.spacing(1),
    minWidth: 120,
  },
  table: {
    minWidth: 350,
  }
}));

export default function VerEstadoDoc() {
  const classes = useStyles();
  const history = useHistory();
  const [id, setId] = React.useState(0);
  const [description, setDescription] = React.useState('');
  const [requests, setRequests] = React.useState([]);
  const [user, setUser] = React.useState('');
  const [modal, setModal] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [color, setColor] = React.useState('');

  const getRequests = async () => {
    const res = await axios.get('https://tesis-app-server.herokuapp.com/request');
    setRequests(res.data.requests);
  }

  const sendDocument = (id) => {
    history.push({
      pathname: '/dashboard/envio',
      state: {
        idRequest: id,
      }
    });
  }

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar(false);
  };

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
    if (user.admin) {
      getRequests();
      return;
    } else {
      (async () => {
        const res = await axios.get(`https://tesis-app-server.herokuapp.com/request/user/${user.id_person}`);
        setRequests(res.data.requests);
      })();
    }
  }, [user.admin, user.id_person, modal]);

  const getRequestById = async (id) => {
    setModal(true);
    try {
      const res = await axios.get(`https://tesis-app-server.herokuapp.com/request/${id}`);
      const { description } = res.data.request;
      setDescription(description);
      setId(id);
    } catch (e) {
      console.log(e.response.data.message);
    }
  };

  const editRequest = async () => {
    try {
      const res = await axios.patch(`https://tesis-app-server.herokuapp.com/request/${id}`, {
        description
      });
      setModal(false);
      setColor('success');
      setSnackbar(true);
      setSnackbarMessage(res.data.message);
    } catch (e) {
      setColor('error');
      setSnackbar(true);
      setSnackbarMessage(e.response.data.message);
    }
  };

  const deleteRequest = async (id) => {
    try {
      const res = await axios.delete(`https://tesis-app-server.herokuapp.com/request/${id}`);
      getRequests();
      setColor('success');
      setSnackbar(true);
      setSnackbarMessage(res.data.message);
    } catch (e) {
      setColor('error');
      setSnackbar(true);
      setSnackbarMessage(e.response.data.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PostAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Solicitudes
        </Typography>
        <form className={classes.form} noValidate>
          <div>
            {/* <TextField
              variant="outlined"
              margin="normal"
              required
              id="cedula"
              label="Cedula"
              name="cedula"
              autoComplete="cedula"
              style={{
                float: 'left'
              }}
              autoFocus
              value={document}
              onChange={(v) => setDocument(v.target.value)}
            />
            <InputLabel
              id="demo-controlled-open-select-label"
              style={{
                marginLeft: 50
              }}>Tipo Perfil</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              value={documentType}
              onChange={(v) => setDocumentType(v.target.value)}
              style={{
                margin: 20
              }}>
              <MenuItem value={"CONSTANCIA"}>CONSTANCIA</MenuItem>
              <MenuItem value={"CERTIFICADO"}>CERTIFICADO</MenuItem>
            </Select> */}
          </div>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label='sticky table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Solicitud</TableCell>
                    <TableCell align="right">Fecha</TableCell>
                    <TableCell align="right">Estado</TableCell>
                    <TableCell align="right">Descripción</TableCell>
                    <TableCell align='right'></TableCell>
                    <TableCell align='right'></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {requests.map((request) => (
                    <>
                      <TableRow key={request.document_type}>
                        <TableCell component="th" scope="row">
                          {request.document_type}
                        </TableCell>
                        <TableCell align="right">{new Date(request.date).toLocaleDateString('en-GB')}</TableCell>
                        <TableCell align="right">{request.status}</TableCell>
                        <TableCell align="right">{request.description}</TableCell>
                        <TableCell
                          align='right'
                          variant='contained'
                          style={{
                            margin: 0
                          }}>
                          {
                            request.status === 'PENDIENTE' ?
                              user.admin === false ? <p style={{ color: 'red', margin: 10 }}>SOLICITADO</p> :
                                <Button color='primary'
                                  onClick={() => sendDocument(request.id_request)}
                                >Enviar documento</Button>
                              : <p style={{ color: 'green', margin: 10 }}>APROBADO</p>
                          }
                        </TableCell>
                        <TableCell align='right'>
                          <IconButton color='primary' size='small' onClick={() => getRequestById(request.id_request)}>
                            <EditIcon />
                          </IconButton>
                          <IconButton color='error' size='small' onClick={() => deleteRequest(request.id_request)}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                      <Modal open={modal}>
                        <Box sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: 400,
                          bgcolor: 'background.paper',
                          borderRadius: 1,
                          boxShadow: 24,
                          p: 4,
                        }}>
                          <div style={{ marginTop: 10, padding: 5 }}>
                            <TextField value={description} onChange={e => setDescription(e.target.value)}
                              label='Descripción' />
                          </div>
                          <br />
                          <div style={{ marginTop: 10 }}>
                            <Button color='primary' onClick={editRequest}>Confirmar</Button>
                            <Button style={{ color: 'red' }} onClick={() => setModal(false)}>Cerrar</Button>
                          </div>
                        </Box>
                      </Modal>
                    </>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
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