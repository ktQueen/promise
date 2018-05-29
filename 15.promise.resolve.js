console.log('start'); //1.start
Promise.resolve().then(() => {
    console.log('Step 1'); //2.Step 1
    return Promise.resolve('Hello');
}).then(value => {
    console.log(value, 'World'); //3.Hello world
    return Promise.resolve(new Promise(resolve => {
        setTimeout(() => {
            resolve('Good');
        }, 2000);
    }));
}).then(value => {
    console.log(value, ' evening'); //4.Goog evening
    return Promise.resolve({
        then() {
            console.log(', everyone'); //5., everyone
        }
    })
})