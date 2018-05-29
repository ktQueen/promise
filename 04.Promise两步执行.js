console.log('here we go');
new Promise(resolve => {
        setTimeout(() => {
            resolve('hello');
        }, 2000);
    })
    .then(value => {
        console.log(value); //1.hello
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('world');
            }, 2000);
        });
    })
    .then(value => {
        console.log(value + ' world'); //2.world world
    });