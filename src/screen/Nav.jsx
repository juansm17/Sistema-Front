import { Link } from "react-router-dom";
import "../styles/index.css"

const Nav = () => {
    return(
        <nav className = "nav">
            <ul className = "menu">
                <li className = "items" ><Link>Inicio</Link></li>
                <li className = "items" ><Link to = "/solicitud">Solicitud</Link></li>
                <li className = "items" ><Link to = "/verEstado">Ver Estado</Link></li>
                <li className = "items" ><Link to = "/envio">Envio</Link></li>
                <li className = "items" ><Link to = "/mantPersona">Persona</Link></li>
                <li className = "items" ><Link to = "/mantDoc">Documento</Link></li>
                <li className = "items" ><Link to = "/estado">Estado</Link></li>
            </ul>
        </nav>
    )
}
export default Nav;