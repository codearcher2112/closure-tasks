function curry(func, ...args) {
    return function (...newArgs) {
        const allArgs = [...args, ...newArgs];

        if (allArgs.length >= func.length) {
            return func(...allArgs);
        } else {
            return curry(func, ...allArgs);
        }
    }
}

function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);

curriedAdd(1)(2)(3);
curriedAdd(1, 2)(3);
curriedAdd(1, 2, 3);
