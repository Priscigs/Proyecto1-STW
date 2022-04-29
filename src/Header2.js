import React from "react";
import './Header2.css';

class Header2 extends React.Component {
    render() {
        return (
            <header>
                <div className="grid-containerH2">
                    <img src="../assets/fondo.jpeg" width='1510px' height='560'></img>
                    <div className="grid-header2">
                        <div className="mainText">EXCLUSIVE PHOTOGRAPHY TIPS AND</div>
                        <div className="mainText22">TECHNIQUES</div>
                        <div className="infoText4">Check out my blog for all this and so much more.</div>
                        <button type="button" className="btn1H2 btnH2">LEARN MORE</button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header2;