import { Link } from 'react-router-dom'
import './logo.css';    

const Logo = () =>{
    return(
        <div className="containerLogo">
            <img src="../logo192.png" alt='logo' className="logo"></img>
            <Link to={'/'} className="tituloApp">Indumentaria React</Link>
        </div>
        
    )
}

export default Logo