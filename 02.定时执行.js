console.log('here we go');
new Promise(resolve => {
        setTimeout(() => {
            resolve('hello');
            console.log(123); //1.123
        }, 2000);
    })
    .then(name => {
        console.log(name + ' world'); //2.helloworld
    });