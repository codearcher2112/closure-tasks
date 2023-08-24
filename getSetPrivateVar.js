const secretValue = privateVariable(42);

function privateVariable(num) {
    let private = num;

    return {
        get() {
            return private;
        },
        set(newnNum) {
            private = newnNum;
        }
    }
}

secretValue.get();
secretValue.set(100);
secretValue.get();