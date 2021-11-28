import { Switch, Route, Redirect } from "react-router";
import MantPersona from '../screen/Mant Persona';
import MantDoc from '../screen/MantDoc';
import Solicitud from '../screen/Solicitud';
import Estado from '../screen/Estado';
import VerEstado from '../screen/Ver estado';
import Envio from '../screen/envio';
import Nav from '../screen/Nav';

export const DashBoard = () =>{
    return (
       <>
         <Nav />
         <Switch>
            <Route path="/mantPersona">
               <MantPersona/>
            </Route>
            <Route path="/mantDoc">
               <MantDoc/>
            </Route>
            <Route path="/solicitud">
               <Solicitud/>
            </Route>
            <Route path="/estado">
               <Estado/>
            </Route>
            <Route exact path="/verEstado">
               <VerEstado/>
            </Route>
            <Route path="/envio">
               <Envio/>
            </Route>
            <Redirect to = "/mantPersona" />
         </Switch>
       </>
    );
}