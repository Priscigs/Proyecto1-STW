import React from "react";
import './Header2.css';

class Header2 extends React.Component {
    render() {
        return (
            <header>
                <div className='grid-containerH2'>
                    {/* <img src="../assets/cityscapes.jpeg" width='200%' height='560px' ></img> */}
                    <div className="grid-header2">
                        <div className="mainText">EXCLUSIVE PHOTOGRAPHY TIPS AND</div>
                        <div className="mainText">TECHNIQUES</div>
                        <div className="infoText">Check out my blog for all this and so much more.</div>
                        <button type="button" className="btn1H2 btnH2">LEARN MORE</button>
                    </div>
                </div>
                
            </header>
        );
    }
}

export default Header2;