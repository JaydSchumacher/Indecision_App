
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        //return 'Hi ' + this.name + '!';
        return `Hi. my name is ${this.name} and I am ${this.age} years old.`;
    }

    getDescription() {
        //return 'Hi ' + this.name + '!';
        return `${this.name} is ${this.age} years old `;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += `Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeloc) {
        super(name, age);
        this.homeloc = homeloc;
    }

    hasHomeLoc() {
        return !!this.homeloc
    }

    getGreeting() {
        let greeting = super.getGreeting();
    
        if (this.hasHomeLoc()) {
            greeting += ` Their home location is ${this.homeloc}`
        }

        return greeting;
    }
}

const me = new Traveler('Jayd Schumacher', 100, 'Seattle');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());