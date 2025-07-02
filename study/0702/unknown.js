var value2 = 10; //unknown 값 사용하려고 할때는 if로 타입체크 필수
value2 = "hello";
console.log(value2);
value2 = new Array(); // [], Array(), new Array(), new Array(10)
if (value2 instanceof Array) {
    value2.push(33);
}
console.log(value2);
