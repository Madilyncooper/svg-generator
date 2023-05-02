const Shapes = require('../shapes.js');
const Triangle = Shapes.Triangle;
const Square = Shapes.Square;
const Circle = Shapes.Circle;

describe('Shapes', () => {

    describe('Triangle', () => {

        it('Should return a string for an svg with the given shape color.', () => {
            const shape = new Triangle();
            shape.setColor('blue');

            expect(shape.render()).toEqual(`<polygon points='150,18 244,182 56,182' fill='blue' />`);
        });
        it('Should return a string for an svg with the given text and text color', () => {
            const textColor = new Triangle();
            textColor.setText('white', 'MMC');

            expect(textColor.textSvg()).toEqual(`<text x='150' y='150' font-size='40' text-anchor='middle' fill='white'>MMC</text>`);
        });
    });
});



describe('Shapes', () => {

    describe('Square', () => {

        it('Should return a string for an svg with the given shape color.', () => {
            const shape = new Square();
            shape.setColor('blue');

            expect(shape.render()).toEqual(`<rect x='50' y='20' width='150' height='150' fill='blue' />`);
        });
        it('Should return a string for an svg with the given text and text color', () => {
            const textColor = new Square();
            textColor.setText('white', 'MMC');

            expect(textColor.textSvg()).toEqual(`<text x='42%' y='50%' font-size='40' text-anchor='middle' fill='white'>MMC</text>`);
        });
    });
});


describe('Shapes', () => {

    describe('Circle', () => {

        it('Should return a string for an svg with the given shape color.', () => {
            const shape = new Circle();
            shape.setColor('blue');

            expect(shape.render()).toEqual(`<circle cx='150' cy='100' r='80' fill='blue' />`);
        });
        it('Should return a string for an svg with the given text and text color', () => {
            const textColor = new Circle();
            textColor.setText('white', 'MMC');

            expect(textColor.textSvg()).toEqual(`<text x='150' y='125' font-size='40' text-anchor='middle' fill='white'>MMC</text>`);
        });
    });
});

