const fs = require('fs');
const shapes = require('./lib/shapes.js');
const inquirer = require('inquirer');


inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What would you like the logo\'s text to be? You may type up to three characters:',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like the text color to be? Enter a color keyword OR a hexadecimal:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for you logo:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like the shape to be? Enter a color keyword OR a hexadecimal:',
        },

    ])
    .then((answers) => {
        const Triangle = shapes.Triangle;
        const Square = shapes.Square;
        const Circle = shapes.Circle;

        if (answers.shape === 'triangle') {
            const shape = new Triangle();

            shape.setColor(`${answers.shapeColor}`);
            shape.setText(`${answers.textColor}`, `${answers.text}`);

            const triangleText = shape.textSvg();
            const triangleColor = shape.render();

            let logoSvg = `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
        ${triangleColor}
        ${triangleText}
    </svg>`
            fs.writeFile('logo.svg', `${logoSvg}`, (err) => console.log('Generated logo.svg!'));
        }
        else if (answers.shape === 'square') {
            const shapeTwo = new Square();

            shapeTwo.setColor(`${answers.shapeColor}`);
            shapeTwo.setText(`${answers.textColor}`, `${answers.text}`);

            const squareText = shapeTwo.textSvg();
            const squareColor = shapeTwo.render();

            const logoSvg = `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
        ${squareColor}
        ${squareText}
    </svg>`
            fs.writeFile('logo.svg', `${logoSvg}`, (err) => console.log('Generated logo.svg!'));
        }
        else if (answers.shape === 'circle') {
            const shapeThree = new Circle();

            shapeThree.setColor(`${answers.shapeColor}`);
            shapeThree.setText(`${answers.textColor}`, `${answers.text}`);

            const circleText = shapeThree.textSvg();
            const circleColor = shapeThree.render();

            const logoSvg = `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
        ${circleColor}
        ${circleText}
    </svg>`
            fs.writeFile('logo.svg', `${logoSvg}`, (err) => console.log('Generated logo.svg!'));
        }
    });


