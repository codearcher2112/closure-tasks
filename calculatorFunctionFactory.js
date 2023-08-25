function createCalculator(operator) {
    return function(a, b) {
        if (operator === 'add') {
            return a + b;
        }
    
        if (operator === 'multiply') {
            return a * b;
        }
    }
}

const add = createCalculator("add");
add(3, 5);

const multiply = createCalculator("multiply");
multiply(2, 4);
