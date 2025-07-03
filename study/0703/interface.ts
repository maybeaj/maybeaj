interface Movable {
    move() :void;
}

class Cars implements Movable{
    move(): void {
        console.log("car");
    }
}

class Robot implements Movable{
    move(): void {
        console.log("robot");
    }
}