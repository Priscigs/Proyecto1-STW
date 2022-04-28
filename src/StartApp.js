import React from 'react';
import './StartApp.css';
import deck from './deck';
import SliderImg from './SliderImg';
import GridImages from './GridImages';
import Board from './Board';
import Header from './Header'
import Header2 from './Header2';
import Header3 from './Header3';
import Header4 from './Header4';
import Header5 from './Header5';
import Header6 from './Header6';
import Video from './Video';
import Testimonial from './Testimonial';
import Buttons from './Buttons';
import Header7 from './Header7';
import Info from './Info';
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
                <GridImages></GridImages>
                <Header2></Header2>
                <Header3></Header3>
                <Board deckCards = {this.state.deckCards}/>
                <Header4></Header4>
                <Video></Video>
                <Header5></Header5>
                <Testimonial></Testimonial>
                <Header6></Header6>
                <Buttons></Buttons>
                <Header7></Header7>
                <Info></Info>
            </Router>
        );
    }
}
export default StartApp;