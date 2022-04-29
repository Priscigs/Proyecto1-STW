import React from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselCaption } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
    {
        src: '../assets/landscape1.jpeg',
        altText: 'IGNITING PASSION',
        caption: 'Let´s ignite your passion for photography and travel'
    },
    {
        src: '../assets/frog.jpeg',
        altText: 'FINE ART GALLERY',
        caption: 'A selection of my award-winning photographs and prints'
    },
    {
        src: '../assets/landscape2.jpeg',
        altText: 'PHOTOGRAPHY TOURS',
        caption: 'Explore some of the world´s leading tours and workshops'
    },
    {
        src: '../assets/landscape3.jpeg',
        altText: 'FINE ART GALLERY',
        caption: 'A selection of my award-winning photographs and prints'
    },
    {
        src: '../assets/cityscapes.jpeg',
        altText: 'FINE ART GALLERY',
        caption: 'A selection of my award-winning photographs and prints'
    }
];

class SliderImg extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }   

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (<CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}> <img src={item.src} alt={item.altText} width="100%" height="750px"/><CarouselCaption captionText={item.caption} captionHeader={item.caption} /></CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}>
                {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} /> */}
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}


export default SliderImg ;

// reactstrap - Carousel. (2022). Netlify.app. https://6-4-0--reactstrap.netlify.app/components/carousel/