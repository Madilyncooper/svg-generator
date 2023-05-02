class Shapes {
  constructor() {
    this.color = '';
    this.text = '';
  }
  setColor(color) {
    this.color = color;
  }
  setText(fill, text) {
    this.fill = fill;
    this.text = text;
  }
};

class Triangle extends Shapes {
  render() {
    return `<polygon points='150,18 244,182 56,182' fill='${this.color}' />`;
  }
  textSvg() {
    return `<text x='150' y='150' font-size='40' text-anchor='middle' fill='${this.fill}'>${this.text}</text>`
  }
};

class Square extends Shapes {
  render() {
    return `<rect x='50' y='20' width='150' height='150' fill='${this.color}' />`;
  }
  textSvg() {
    return `<text x='42%' y='50%' font-size='40' text-anchor='middle' fill='${this.fill}'>${this.text}</text>`
  }
};

class Circle extends Shapes {
  render() {
    return `<circle cx='150' cy='100' r='80' fill='${this.color}' />`;
  }
  textSvg() {
    return `<text x='150' y='125' font-size='40' text-anchor='middle' fill='${this.fill}'>${this.text}</text>`
  }
};


module.exports = {
  Shapes,
  Triangle,
  Circle,
  Square
}


