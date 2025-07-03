class Counter2 {
    static count: number = 0;

    static increment() {
        Counter2.count++;
    }

    static getCount() {
        console.log(Counter2.count);
    }
}

Counter2.increment();
Counter2.increment();
Counter2.increment();
Counter2.getCount();