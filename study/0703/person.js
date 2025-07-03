var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.introduce = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694 \uC800\uB294 ".concat(this.age, "\uC0B4\uC758 ").concat(this.name, "\uC785\uB2C8\uB2E4."));
    };
    return Person;
}());
var her = new Person();
her.name = "Alice";
her.age = 20;
her.introduce();
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.display = function () {
        console.log("\uC81C\uD488\uBA85: ".concat(this.name, ", \uAC00\uACA9: ").concat(this.price, "\uB9CC\uC6D0"));
    };
    return Product;
}());
var mac = new Product("MacBook", 150);
mac.display();
