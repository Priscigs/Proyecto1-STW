import React from "react";
import './GridImages.css';

class GridImages extends React.Component {
    render() {
        return (
            <header>
                <div className="div.slide-up">
                    
                </div>
                <div className='grid-main'>
                    <div className="grid-containerImages">
                        <div className="grid-infoo1">
                            <div className="mainText2">JOIN ME ON AN EXTRAORDINARY PHOTOGRAPHY TOUR AND ADVENTURE</div>
                            <div className="infoText2">An IP Travel Photography tour will take you to the most exotic locations on earth,  transform your photography skills, and see you capture images that will define your creative legacy.</div>
                            <form method="get" action="http://www.donothingfor2minutes.com/">
                                <button name='btn1' type="submit" className="btn1I1 btnI11">LEARN MORE</button>
                            </form>
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
                            <form method="get" action="http://www.donothingfor2minutes.com/">
                                <button name='btn2' type="submit" className="btn1I1 btnI11">VIEW NOW</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='grid-main'>
                    <div className="grid-containerImages">
                        <div className="grid-infoo1">
                            <div className="mainText3">A BOOK IS A DREAM YOU CAN HOLD IN YOUR HAND</div>
                            <div className="infoText2">Discover my limited edition collection of photography and coffee table books.</div>
                            <form method="get" action="http://www.donothingfor2minutes.com/">
                                <button name='btn3' type="submit" className="btn1I1 btnI11">VIEW NOW</button>
                                </form>
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