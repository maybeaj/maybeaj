class Person {
    name: string;
    age: number;

    introduce() {
        console.log(`안녕하세요 저는 ${this.age}살의 ${this.name}입니다.`);
    }
}

let her = new Person();
her.name = "Alice";
her.age = 20;

her.introduce();

class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    display() {
        console.log(`제품명: ${this.name}, 가격: ${this.price}만원`);
    }
}

let mac = new Product("MacBook", 150);
mac.display();

