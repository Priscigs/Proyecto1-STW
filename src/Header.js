import React from 'react';
import { Link } from 'react-router-dom' 
import './Header.css';

class Header extends React.Component {
    render() {
        return(
            <div className='words'>
                <img className='imagenLogo' src='../assets/logo.png' width='250px' height='30px'></img>
                <ul className='menu-ul'>
                    {/* <h2 className='title'>IGNACIO PALACIOS</h2> */}
                    
                    <li >
                        <Link to="/">TOURS</Link>
                    </li>
                    <li>
                        <Link to="/FineArt">FINE ART</Link>
                    </li>
                    <li>
                        <Link to="/Books">BOOKS</Link>
                    </li>
                    <li>
                        <Link to="/Membership">MEMBERSHIP</Link>
                    </li>
                    <li>
                        <Link to="/Awards">AWARDS</Link>
                    </li>
                    <li>
                        <Link to="/Blog">BLOG</Link>
                    </li>
                    <li>
                        <Link to="/About">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/Contact">CONTACT</Link>
                    </li>
                    <li>
                        <Link to="/Login">LOGIN</Link>
                    </li>
                    <img src='../assets/linea.png' width="20px" height="35px"></img>
                    <img src='../assets/lupa.png' width="35px" height="35px"></img>
                    <img className='imagenCompra' src='../assets/compra.png' width="35px" height="35px"></img>
                </ul>
            </div>
        )
    }
}

export default Header;  
