import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const Nav = () => {
    const history = useHistory();
    const [user, setUser] = React.useState('');

    React.useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, []);

    const logOut = () => {
        history.push('/signin');
        localStorage.clear();
    }

    return (
        <nav className="nav">
            <ul className="menu">
                <li className="items"><Link to="/dashboard/solicitud">Solicitud</Link></li>
                <li className="items"><Link to="/dashboard/verEstado">Estado</Link></li>
                {
                    user.admin ?
                        <li className="items"><Link to="/dashboard/envio">Envio</Link></li>
                        : ''
                }
                <li className="items"><Link to="/dashboard/mantPersona">Perfil</Link></li>
                <li className="items"><Button style={{ color: 'white', backgroundColor: '#d93442' }} variant='contained' onClick={logOut}>Cerrar sesión</Button></li>
            </ul>
        </nav >
    )
}
export default Nav;