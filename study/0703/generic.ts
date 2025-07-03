function identity<T>(value: T): T {
	return value;
}

let output = identity<string>("hello");
console.log(output);

let output2 = identity<number>(10);
console.log(output2);

function getValue<K extends string, V>(obj: Record<K, V>, key: K): V {
	return obj[key];
}

let objects = { name: "john", age: 20 };

let result = getValue(objects, "name");
console.log(result);