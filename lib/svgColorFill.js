const Shapes = require('./shapes.js');


const Triangle = Shapes.Triangle;
const Square = Shapes.Square;
const Circle = Shapes.Circle;


const shape = new Triangle();
shape.setColor('blue');
shape.render();

const shapeTwo = new Square();
shapeTwo.setColor('blue');
shapeTwo.render();

const shapeThree = new Circle();
shapeThree.setColor('blue');
shapeThree.render();


console.log(shapeThree.render());