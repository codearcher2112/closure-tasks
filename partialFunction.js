function add(a, b, c) {
    return a + b + c;
}

function partial(fn, num) {
    return function(...args) {
        return fn(num, ...args);
    };
}

const add5 = partial(add, 5);

add5(10, 20);
