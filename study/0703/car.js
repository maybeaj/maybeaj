var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function (driver) {
        console.log("".concat(driver.name, "\uB2D8 \uC6B4\uC804\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4."));
    };
    return Car;
}());
var Driver = /** @class */ (function () {
    function Driver() {
    }
    return Driver;
}());
var car = new Car();
var driver = new Driver();
driver.name = "홍길동";
car.drive(driver);
// car.drive(new Driver());
