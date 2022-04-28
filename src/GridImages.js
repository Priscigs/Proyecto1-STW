import React from "react";
import './GridImages.css';

class GridImages extends React.Component {
    render() {
        return (
            <header>
                <div className='grid-main'>
                    <div className="grid-containerImages">
                        <div className="grid-infoo1">
                            <div className="mainText2">JOIN ME ON AN EXTRAORDINARY PHOTOGRAPHY TOUR AND ADVENTURE</div>
                            <div className="infoText2">An IP Travel Photography tour will take you to the most exotic locations on earth,  transform your photography skills, and see you capture images that will define your creative legacy.</div>
                            <button type="button" className="btn1H2 btnH2">LEARN MORE</button>
                        </div>
                        <div className="grid-images">
                            <img src="../assets/arena.jpeg" height="700" width="750px"></img>
                        </div>
                    </div>
                </div>
                <div className='grid-main'>
                    <div className="grid-containerImages">
                        <div className="grid-images2">
                            <img src="../assets/cueva.jpeg" height="700" width="750px"></img>
                        </div>
                        <div className="grid-infoo1">
                            <div className="mainText4">EXPLORE MY COLLECTION OF AWARD-WINNING FINE ART IMAGES AND PRINTS</div>
                            <div className="infoText2">You’re invited to browse the masterpiece collection. A carefully curated selection of my signature photographs from around the world.</div>
                            <button type="button" className="btn1H2 btnH2">VIEW NOW</button>
                        </div>
                    </div>
                </div>
                <div className='grid-main'>
                    <div className="grid-containerImages">
                        <div className="grid-infoo1">
                            <div className="mainText3">A BOOK IS A DREAM YOU CAN HOLD IN YOUR HAND</div>
                            <div className="infoText2">Discover my limited edition collection of photography and coffee table books.</div>
                            <button type="button" className="btn1H2 btnH2">VIEW NOW</button>
                        </div>
                        <div className="grid-images">
                            <img src="../assets/gorilla.jpeg" height="700" width="750px"></img>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default GridImages;