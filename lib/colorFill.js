const Shapes = require('./shapes.js');


const Triangle = Shapes.Triangle;
const Square = Shapes.Square;
const Circle = Shapes.Circle;


const shape = new Triangle();
shape.setColor('blue');
const triangleColor = shape.render();

const shapeTwo = new Square();
shapeTwo.setColor('blue');
const squareColor = shapeTwo.render();

const shapeThree = new Circle();
shapeThree.setColor('blue');
const circleColor = shapeThree.render();

module.exports = {
circleColor,
squareColor,
triangleColor
}