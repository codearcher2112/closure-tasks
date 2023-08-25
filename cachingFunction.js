const cachedCalculation = createCachingFunction();

function createCachingFunction() {
    const cache = {};

    return function(arg) {
        if (cache[arg] === undefined) {
            return `${cache[arg] = arg * 2} (calculated)`;
        } else {
            return `${cache[arg]} (cached)`;
        }
    };
}

cachedCalculation(5);
cachedCalculation(5);
cachedCalculation(6);