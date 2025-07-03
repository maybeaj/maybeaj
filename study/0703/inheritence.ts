class Animal {
    sound() {
        console.log("소리");
    }
}

class Doggie extends Animal {
    sound() {
        console.log("멍멍");
    }
}

class Cat extends Animal {
    sound() {
        console.log("야옹");
    }
}

let puppy = new Doggie();
puppy.sound();
let kitten = new Cat();
kitten.sound();

const animals: Animal[] = [new Doggie(), new Cat()];
for (let i = 0; i < animals.length; i++) {
    animals[i].sound();
}
