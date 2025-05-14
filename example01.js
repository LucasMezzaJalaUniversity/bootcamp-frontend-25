class Animal {
  constructor(name, sound) {
    this.name = name;
    this._sound = sound;
  }

  speak() {
    console.log(`${this.name} says ${this._sound}`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, "woof");
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} the ${this.breed} barks: ${this._sound}`);
  }
}

class Zoo {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }

  makeNoise() {
    this.animals.forEach((animal) => animal.speak());
  }
}

const dog1 = new Dog("Rex", "Labrador");
const dog2 = new Dog("Max", "Beagle");
const zoo = new Zoo();

zoo.addAnimal(dog1);
zoo.addAnimal(dog2);

zoo.makeNoise();
