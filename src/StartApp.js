import React from 'react';
import './StartApp.css';
import Header from './Header'
import Tours from './Tours'
import FineArt from './FineArt'
import Cuadricula from './Cuadricula';
import deck from './deck';
import SliderImg from './SliderImg';
import Board from './Board';
import Header3 from './Header3';
import Header4 from './Header4';
import Header5 from './Header5';
import Video from './Video';
import Testimonial from './Testimonial';
import '../assets/landscape1.jpeg'
import '../assets/landscape2.jpeg'
import '../assets/landscape3.jpeg'
import { BrowserRouter as Router,
         Route } from 'react-router-dom'

const getInitState = () => {
    const deckCards = deck();
    return {
        deckCards
    };
}

class StartApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = getInitState();
    }
    
    render() {
        return (
            <Router>
                <div>
                    <Header></Header>
                    {/* <Route path="/" component={Tours} />
                    <Route path="/FineArt" component={FineArt} /> */}
                </div> 
                <SliderImg>
                        
                </SliderImg>
                <Header3></Header3>
                <Board deckCards = {this.state.deckCards}/>
                <Header4></Header4>
                <Video></Video>
                <Header5></Header5>
                <Testimonial></Testimonial>
            </Router>
        );
    }
}
export default StartApp;