import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './screen/SignIn';
import SignUp from './screen/SignUp';
import MantPersona from './screen/Mant Persona';
import MantDoc from './screen/MantDoc';
import Solicitud from './screen/Solicitud';
import Estado from './screen/Estado';
import VerEstado from './screen/Ver estado';
import Envio from './screen/envio';
function App() {
  return (
    <div className="wrapper">
      
      <BrowserRouter>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
             </Route>
             <Route path="/MantPersona">
               <MantPersona/>
             </Route>
             <Route path="/MantDoc">
               <MantDoc/>
             </Route>
             <Route path="/Solicitud">
               <Solicitud/>
             </Route>
             <Route path="/Estado">
               <Estado/>
             </Route>
             <Route path="/VerEstado">
               <VerEstado/>
             </Route>
             <Route path="/Envio">
               <Envio/>
             </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;