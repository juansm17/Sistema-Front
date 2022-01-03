import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from "../screen/SignIn";
import SignUp from "../screen/SignUp";
import { Dashboard } from "../screen/Dashboard";
import SolicitudDoc from "../screen/Solicitud";
import VerEstadoDoc from '../screen/Ver estado';
import EnvioDoc from '../screen/envio';
import MantPersona from '../screen/Mant Persona';
import MantDoc from '../screen/MantDoc';
import EstadoDoc from '../screen/Estado';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/dashboard/solicitud' component={SolicitudDoc} />
      <Route path='/dashboard/verEstado' component={VerEstadoDoc} />
      <Route path='/dashboard/envio' component={EnvioDoc} />
      <Route path='/dashboard/mantPersona' component={MantPersona} />
      <Route path='/dashboard/mantDoc' component={MantDoc} />
      <Route path='/dashboard/estado' component={EstadoDoc} />
    </BrowserRouter>
  )
}

export default AppRoute;