import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useLocation } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import axios from 'axios';
import Button from '@mui/material/Button';

export default function MantDoc() {
  const location = useLocation();
  const [id, setId] = React.useState(0);
  const [documentType, setDocumentType] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    const { idRequest, documentType, description } = location.state;
    setId(idRequest);
    setDocumentType(documentType);
    setDescription(description);
  }, [location.state]);

  const editRequest = async () => {
    setDisabled(true);
    try {
      const res = await axios.patch(`https://tesis-app-server.herokuapp.com/request/${id}`, {
        documentType,
        description,
      });
      console.log(res.data);
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const enableEditRequest = () => {
    setDisabled(false);
  };

  const cancelEditRequest = () => {
    setDisabled(true);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card sx={{ width: '50%', marginTop: 10, backgroundColor: 'white' }}>
        <CardContent>
          <TextField disabled={disabled} value={documentType} onChange={e => setDocumentType(e.target.value)} />
          <TextField disabled={disabled} value={description} onChange={e => setDescription(e.target.value)} />
        </CardContent>
        <CardActions>
          {
            disabled ?
              <>
                <Button color='primary' onClick={enableEditRequest}>Editar solicitud</Button>
              </>
              :
              <>
                <Button color='primary' onClick={editRequest}>Confirmar</Button>
                <Button style={{ color: '#d93442' }} onClick={cancelEditRequest}>Cancelar</Button>
              </>
          }
        </CardActions>
      </Card>
    </div>
  );
}