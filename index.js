function receivesAFunction(cb){
    return cb(() => a + b);
}

function returnsANamedFunction(){
    return returnsANamedFunction
}

function returnsAnAnonymousFunction() {
    return function () {};
 }
