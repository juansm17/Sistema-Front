import { useState } from "react";
import {useEffect} from "react"

import { BrowserRouter } from 'react-router-dom'; 
import { AuthRoute } from './AuthRoute';
import { DashBoard } from './DashBoard';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

const AppRoute = () => {
  const [logged, setLogged] = useState(false);
  useEffect(()=>{
    fetch('https://control-estudios-je.herokuapp')
  },[])
    return (
      <BrowserRouter>  
        <PublicRoutes exact path = "/signin" isLogged = { true } Component = { AuthRoute } />
        <PrivateRoutes path = "/" isLogged = { true } Component = { DashBoard } />
      </BrowserRouter>
    )
}

export default AppRoute;