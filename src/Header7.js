import React from "react";
import './Header7.css';

class Header7 extends React.Component {
    render() {
        return (
            <header>
                <div className='grid-container2'>
                    <div className="grid-button2">
                        <button type="button" className="button">Load More...</button>
                    </div>
                    <div className="grid-button2">
                        <button type="button" className="button2"><img src="../assets/instagram.png" height ="25" width="25" />Follow on Instagram</button>
                    </div>
                </div>
                
            </header>
        );
    }
}

export default Header7;