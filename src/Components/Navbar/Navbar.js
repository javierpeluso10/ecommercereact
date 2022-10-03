import Logo from '../Logo/logo';
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

const Navbar = () =>{
    return(
    <header className="header">
        <div className='logoContainer'>
            <Logo/>
        </div>
            <nav className="nav">
                <div className='navMenu'>
                    <Link to={`category/buzo`} className='buttonNavbar'>Buzos</Link>
                    <Link to={`category/pantalones`} className='buttonNavbar'>Pantalones</Link>
                    <Link to={`category/camisas`} className='buttonNavbar'>Camisas</Link>
                </div>
            </nav>
            <div className='cartWidget'>
                    <CartWidget/>
                </div>
    </header>
    )
}

export default Navbar