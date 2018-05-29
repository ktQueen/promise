console.log('start');
let promise = new Promise(resolve => {
    setTimeout(() => {
        console.log('the promise fulfilled'); //1.the promise fulfilled
        resolve('hello, world');
    }, 1000);
});

setTimeout(() => {
    promise.then(value => {
        console.log(value); //2.hello, world
    });
}, 3000);