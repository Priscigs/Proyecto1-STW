import React from 'react';
import { Link } from 'react-router-dom' 
import './Header.css';

class Header extends React.Component {
    render() {
        return(
            <div className='wordsH'>
                <img className='imagenLogo' src='../assets/logo.png' width='250px' height='30px'></img>
                <ul className='menu-ul'>
                    {/* <h2 className='title'>IGNACIO PALACIOS</h2> */}
                    
                    <li >
                        <a href="https://iptravelphotography.com.au/tours/">TOURS</a>
                    </li>
                    <li>
                        <a href="https://iptravelphotography.com.au/fine-art/">FINE ART</a>
                    </li>
                    <li>
                        <a href="https://iptravelphotography.com.au/books/">BOOKS</a>
                    </li>
                    <li>
                        <a href="https://iptravelphotography.com.au/vip-membership/">MEMBERSHIP</a>
                    </li>
                    <li>
                        <a href="https://iptravelphotography.com.au/awards/">AWARDS</a>
                    </li>
                    <li>
                        <a href="https://iptravelphotography.com.au/blog/">BLOG</a>
                    </li>
                    <li>
                        <a href="https://iptravelphotography.com.au/about/">ABOUT</a>
                    </li>
                    <li>
                        <a href="https://iptravelphotography.com.au/contact/">CONTACT</a>
                    </li>
                    <li>
                        <a href="https://iptravelphotography.com.au/login/">LOGIN</a>
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
