function memoize(func) {
    const cache = {};

    return function(...arg) {
        if (cache[arg] !== undefined) {
            return `Using cached result for ${arg}, ${cache[arg]}`;
        }
        
        return `Calculated result for ${arg}, ${cache[arg] = func(...arg)}`;
    };
}
  
function fibonacci(num) {
    if (num <= 1) {
        return num;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}
  
const memoizedFibonacci = memoize(fibonacci);
  
memoizedFibonacci(10);
memoizedFibonacci(10);
memoizedFibonacci(5);
