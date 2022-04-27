import React from "react";
import './Buttons.css';

class Buttons extends React.Component {
    render() {
        return (
            <header>
                <div className='grid-containerB'>
                    <div className="grid-buttons">
                        <button type="button" className="btn"> <img src="../assets/button1.jpeg" height ="150" width="150" /></button>
                    </div>
                    <div className="grid-buttons">
                        <button type="button" className="btn"> <img src="../assets/button2.jpeg" height ="150" width="150" /></button>
                    </div>
                    <div className="grid-buttons">
                        <button type="button" className="btn"> <img src="../assets/button3.jpeg" height ="150" width="150" /></button>
                    </div>
                    <div className="grid-buttons">
                        <button type="button" className="btn"> <img src="../assets/button4.jpeg" height ="150" width="150" /></button>
                    </div>
                    <div className="grid-buttons">
                        <button type="button" className="btn"> <img src="../assets/button5.jpeg" height ="150" width="150" /></button>
                    </div>
                    <div className="grid-buttons">
                        <button type="button" className="btn"> <img src="../assets/button6.jpeg" height ="150" width="150" /></button>
                    </div>
                    <div className="grid-buttons">
                        <button type="button" className="btn"> <img src="../assets/button7.jpeg" height ="150" width="150" /></button>
                    </div>
                    <div className="grid-buttons">
                        <button type="button" className="btn"> <img src="../assets/button8.jpeg" height ="150" width="150" /></button>
                    </div>
                </div>
                
            </header>
        );
    }
}

export default Buttons;