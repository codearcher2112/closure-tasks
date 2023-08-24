function createCounter() {
    let count = 1;

    return function() { return count++ }
}

const counter = createCounter();

counter();
counter();
