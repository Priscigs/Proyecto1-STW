import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="main"></div>
                        <div className="content">
                            {/* <img className={`fa $ {this.props.image} fa-$x`}></img> */}
                            <p className='words'>
                                Embark on a Remakable Wildlife Adventure
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;