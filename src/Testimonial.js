import React from 'react';
import './Testimonial.css';

class Testimonial extends React.Component {
    render() {
        return (
            <header>
                <div className='grid-container'>
                    <div className="grid-info">“It is my pleasure to recommend Ignacio Palacios to anyone who is interested in doing sensational photographic tours. I have enjoyed travelling with Ignacio in the past, which is why I’m looking forward to future trips with him. Ignacio is a very competent photographer and also has excellent post-processing skills. He is a good teacher, so anyone travelling with him will be bound to learn some very valuable skills and techniques.”</div>
                    <div className="grid-info">“I have travelled and co-lead tours with Ignacio to Patagonia, the Atacama region and the Lofoten Islands (Norway). All of them were really nice tours and I enjoyed travelling and photographing with him. Ignacio is a great photography instructor, tour leader and I am looking forward to do more adventures with him.”</div>
                    <div className="grid-info">
                        <img src="../assets/perfil1.png" width='60px' height='60px'></img>
                            Ken Duncan
                            Australian Fine Art Landscape Photographer
                    </div>
                    <div className="grid-info">
                        <img src="../assets/perfil2.png" width='60px' height='60px'></img>
                            Art Wolfe
                            American Photographer and Conservationist
                    </div>
                    <div className="grid-info">“I travelled to Patagonia with Ignacio and it was a blast! I think the mark of a good travel leader is how he or she deals with problems - and when we had a few small issues with transport and weather, Ignacio always found a solution! We visited some amazing locations and Patagonia is certainly on my return list!”</div>
                    <div className="grid-info">“This brilliant photography tour was led by Ignacio Palacios and Richard I’Anson. I cannot express my gratitude enough to both for their absolute professionalism, generosity in terms of their time and willingness to share their expertise and for making this such a fun and exciting experience.”</div>
                    <div className="grid-info">
                        <img src="../assets/perfil3.png" width='60px' height='60px'></img>
                                Peter Eastway
                                Australian Landscape Photographer & Editor
                    </div>
                    <div className="grid-info">
                        <img src="../assets/perfil4.png" width='60px' height='60px'></img>
                            Clara from Melbourne
                            Photography Tour Client
                    </div>
                </div>
                
            </header>
        );
    }
}

export default Testimonial;