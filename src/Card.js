import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="main"></div>
                        <div class="content">
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