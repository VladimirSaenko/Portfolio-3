
"use strict";

// const obj = {
//     name: 'Notch',
//     id: '212000112'
// }

// const obj = {
//     name: 'Bogdan',
//     id: '2'
// }

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    }
}

User.prototype.exit = function() {
    console.log(`User ${this.name} exit`);
}

const ivan = new User('Ivan', '28');
const steve = new User('Steve', '31');

ivan.hello();
ivan.exit();

class User2 {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
        console.log(this);
    }

    hello() {
        console.log(`Hello ${this.name}`);
    }

    exit() {
        console.log(`User ${this.name} exit`);
    }
}

const steve2 = new User2('steve smart', 124);

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.helloWorld();
    }

    calcArea() {
        return this.height * this.width;
    }

    helloWorld() {
        console.log('Hello World');
        console.log('Im created');
    }
}

const square = new Rectangle(10, 10);
const rect = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(rect.calcArea());

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', '#r00');

div.showMyProps();
console.log(div.calcArea());
