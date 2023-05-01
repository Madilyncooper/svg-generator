const Shapes = require('../shapes.js');
const Triangle = Shapes.Triangle;
  describe('Shapes', () => {

    describe('Triangle', () => {

        it('Should return a string for an svg with the given shape color.', () => {
            const shape = new Triangle();
            shape.setColor('blue');
    
            expect(shape.render()).toEqual(`<polygon points='150,18 244,182 56,182' fill='blue' />`);
        });
    });
  });

