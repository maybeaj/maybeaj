var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.sound = function () {
        console.log("소리");
    };
    return Animal;
}());
var Doggie = /** @class */ (function (_super) {
    __extends(Doggie, _super);
    function Doggie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Doggie.prototype.sound = function () {
        console.log("멍멍");
    };
    return Doggie;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sound = function () {
        console.log("야옹");
    };
    return Cat;
}(Animal));
var puppy = new Doggie();
puppy.sound();
var kitten = new Cat();
kitten.sound();
var animals = [new Doggie(), new Cat()];
for (var i = 0; i < animals.length; i++) {
    animals[i].sound();
}
