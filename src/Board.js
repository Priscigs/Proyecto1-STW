import React from 'react';
import './Board.css';

class Board extends React.Component {
    render() {
        //const cards = [1,2,3,4];
        return (
            <div className="board">
                {/* {
                    this.props.deckCards.map((card) => <Card image={ card.image }/>)
                } */}
                <div className='grid-board'>
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="main"></div>
                                <div className="content">
                                    <p className='words'>
                                        Embark on a Remakable Wildlife Adventure
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid-board'>
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="main"></div>
                         
                                <div className="content">
                                    
                                    {/* <img className={`fa $ {this.props.image} fa-$x`}></img> */}
                                    <p className='words'>
                                        Photograph the spectacular wildlife and landscapes of Svalbard with me and Ken Duncan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid-board'>
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="main"></div>
                                {/* <img src='../assets/giraffe.jpeg'></img> */}
                                <div className="content">
                                    
                                    {/* <img className={`fa $ {this.props.image} fa-$x`}></img> */}
                                    <p className='words'>
                                        Journey to a mythical land of legendary desertscapes, kaleidoscopes of colour, glorious architecture and unimaginable photography inspiration.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid-board'>
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="main"></div>
                              
                                <div className="content">
                                    
                                    {/* <img className={`fa $ {this.props.image} fa-$x`}></img> */}
                                    <p className='words'>
                                        South Africa truly is a country of astounding diversity, unrivalled beauty and the ultimate playground for the passionate photographer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid-board'>
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="main"></div>
                         
                                <div className="content">
                                    
                                    {/* <img className={`fa $ {this.props.image} fa-$x`}></img> */}
                                    <p className='words'>
                                        Capture the blazing autumnal colours of Japan in Autumn on this dazzling photography tour.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid-board'>
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="main"></div>
                                {/* <img src='../assets/giraffe.jpeg'></img> */}
                                <div className="content">
                                    
                                    {/* <img className={`fa $ {this.props.image} fa-$x`}></img> */}
                                    <p className='words'>
                                        Photograph the glistening beauty and cultural icons of Japan in winter.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;