import React from 'react';

import "../styles/index.css"

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



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
  table:{
      minWidth:350,
  }

}));
function createData(solicitud, fecha, estado,) {
    return { solicitud,fecha,estado};
  }
  
  const rows = [
    createData('constancia ', "24/07/21", 'pediente'),
    createData('expediente', "17/11/20",'procesado'),
    createData('Notas ', "24/06/22",'enviado'),
  
  ];
  
export default function EstadoDoc() {
  const classes = useStyles();
  
  const [documento, setDocumento ] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [ci, setCi ] = React.useState('');
  const [open1,setOpen1]=React.useState(false);
  const handleChange = (event) => {
    setDocumento(event.target.value);
  };
  const handleChange1 = (event) => {
    setCi(event.target.value);
  };


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen1 = () => {
    setOpen1(true);
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
        <InputLabel id="demo-controlled-open-select-label">CI</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open1}
          className = "m-10"
          onClose={handleClose1}
          onOpen={handleOpen1}
          value={ci}
          onChange={handleChange1}
        >
            
          <MenuItem value={10}>27260966 </MenuItem>
          <MenuItem value={20}>9782342</MenuItem>
          <MenuItem value={30}>10632437</MenuItem>
        </Select>
        
        <InputLabel id="demo-controlled-open-select-label" className = "m-20">Tipo Documento </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          className = "m-10"
          onClose={handleClose}
          onOpen={handleOpen}
          value={documento}
          onChange={handleChange}
        >
            
          <MenuItem value={10}>constancia </MenuItem>
          <MenuItem value={20}>Expediente</MenuItem>
          <MenuItem value={30}>Notas Certificadas</MenuItem>
        </Select>
        <TableContainer component={Paper} className = "m-10">
            
      <Table className={classes.table} size="small" aria-label="a dense table" className = "m-10">
        <TableHead>
          <TableRow>
            <TableCell>Solicitud</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Estado</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.solicitud}>
              <TableCell component="th" scope="row">
                {row.solicitud}
              </TableCell>
             
              <TableCell align="right">{row.fecha}</TableCell>
              <TableCell align="right">{row.estado}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          <div className={classes.button}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Actualizar 
          </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}