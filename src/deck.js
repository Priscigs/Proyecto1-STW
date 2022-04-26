import shuffle from 'lodash.shuffle';
import imagesDeck from './imageDeck';

const fourandfour = 6;

export default () => {
    console.log(imagesDeck());
    const iconsDeck = imagesDeck(); 

    // ARRAY DE CARTAS ALEATORIAS 
    let cards = [];
    
    while (cards.length < fourandfour) {
        const index = Math.floor(Math.random() * iconsDeck.length);
        const card = {
            image: iconsDeck.splice(index, 1)[0],
            found: false
        };

        // SE DUPLICA LA CARTA PARA QUE ESTA PUEDA VOLTEARSE AL MISMO TIEMPOS
        cards.push(card);
        cards.push({...card});
    }

    // PARA QUE LAS CARTAS NO SE ENCUENTREN EN LOS MISMOS ÍNFICES SIEMPRE
    return shuffle(cards); 
};  