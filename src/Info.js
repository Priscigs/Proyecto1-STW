import React from "react";
import './Info.css';

class Info extends React.Component {
    render() {
        return (
            <header>
                <div className='grid-containerI'>
                    <div className="grid-container1">
                        <div className="grid-info">
                            <div className="joinText">JOIN OUR NEWSLETTER</div>
                            <div className="infoText">You’re invited to sign up for the IP Travel Photography newsletter to receive exclusive photography tips, inspiring travel stories and the latest tour news.</div>
                            <div className="grid-info2">
                                <input type="text" className="txt" placeholder="FIRST NAME" width='100px' name="FIRST NAME"/>
                                <input type="text" className="txt" placeholder="EMAIL" size='100%' name="EMAIL"/>
                                <button type="button" className="btnI1 btnI">SUBSCRIBE</button>
                            </div> 
                        </div>
                        <div className="grid-info">
                            <div className="joinText">FOLLOW US</div>
                            <div className='grid-containerI2'>
                                <div className="grid-buttonI">
                                    <button type="button" className="btnI100">
                                        <img src="../assets/instagram.png" height ="25" width="25" />
                                    </button>
                                </div>
                                <div className="grid-buttonI">
                                    <button type="button" className="btnI100">
                                        <img src="../assets/facebook.png" height ="18" width="18" />
                                    </button>
                                </div>
                                <div className="grid-buttonI">
                                    <button type="button" className="btnI100">
                                        <img src="../assets/gettyimages.png" height ="25" width="65" />
                                    </button>
                                </div>
                                <div className="grid-buttonI">
                                    <button type="button" className="btnI100">
                                        <img src="../assets/espiral.png" height ="18" width="18" />
                                    </button>
                                </div>
                            </div>
                            <div className='grid-containerI3'>
                                <div className="grid-buttonI3">
                                    <button type="button" className="btnI1001">
                                        <img src="../assets/epson.png" height ="20" width="70" />
                                    </button>
                                </div>
                                <div className="grid-buttonI3">
                                    <button type="button" className="btnI100">
                                        <img src="../assets/aipp.png" height ="70" width="70" />
                                    </button>
                                </div>
                                <div className="grid-buttonI3">
                                    <button type="button" className="btnI100">
                                        <img src="../assets/nikon.png" height ="65" width="70" />
                                    </button>
                                </div>
                            </div>
                            <div className='grid-containerI4'>
                                <div className="grid-buttonI3">
                                    <button type="button" className="btnI100">
                                        <img src="../assets/360p.png" height ="25" width="100%" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="grid-info">
                            <div className="joinText">BLOG CATEGORIES</div>
                            <div className='grid-containerI4'>
                                <div className="grid-button4">
                                    Award Winning Shots
                                </div>
                                <div className="grid-button4">
                                    Composition Tips
                                </div>
                                <div className="grid-button4">
                                    Landscape Photography
                                </div>
                                <div className="grid-button4">
                                    Processing
                                </div>
                                <div className="grid-button4">
                                    South America
                                </div>
                                <div className="grid-button4">
                                    Travel
                                </div>
                                <div className="grid-button4">
                                    Wildlife Photography
                                </div>
                            </div>
                        </div>

                        <div className="grid-info">
                            <div className="joinText">GET IN TOUCH</div>
                            <div className='grid-containerI5'>
                                <div className="infoText">T: +61 (0)455213073</div>
                                <div className="infoText">E: ignacio@iptravelphotography.com.au</div>
                                <div className="grid-info100">
                                    <input type="text" className="txt2" placeholder="SEARCH" width='100px' name="SEARCH"/>
                                    <img src='../assets/lupa.png' className="imagenLupa2" width="35px" height="35px"></img>
                                </div> 
                            </div>
                        </div>
                    </div>     
                </div> 
            </header>
        );
    }
}

export default Info;