class Calculator {
    add(a: number, b: number): void;
    add(a: string, b: string, c: string): void;

    // ✅ 실제 구현부는 하나만!
    add(a: any, b: any, c?: any): void {
        if (typeof a === "number" && typeof b === "number") {
            console.log(a + b);
        } else if (typeof a === "string" && typeof b === "string") {
            console.log(a + b + (c ?? ""));
        }
    }
}

const calculator = new Calculator();
calculator.add(1, 2);                    // 👉 3
calculator.add("안", "녕", "하세요");     // 👉 안녕하세요
