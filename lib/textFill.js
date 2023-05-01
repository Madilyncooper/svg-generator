const Shapes = require('./shapes.js');


const Triangle = Shapes.Triangle;
const Square = Shapes.Square;
const Circle = Shapes.Circle;

const textColor = new Triangle();
textColor.setText('white', 'MMC');
const triangleText = textColor.textSvg();

const textColorTwo = new Square();
textColorTwo.setText('white', 'MMC');
const squareText = textColorTwo.textSvg();

const textColorthree = new Circle();
textColorthree.setText('white', 'MMC');
const circleText = textColorthree.textSvg();


module.exports = {
    triangleText,
    squareText,
    circleText
}