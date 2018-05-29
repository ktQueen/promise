console.log('start');
new Promise(resolve => {
        console.log('Step 1'); //1.Step 1
        setTimeout(() => {
            resolve(100);
        }, 1000);
    })
    .then(value => {
        return new Promise(resolve => {
                console.log('Step 1-1'); //2.Step 1-1
                setTimeout(() => {
                    resolve(110);
                }, 1000);
            })
            .then(value => {
                console.log('Step 1-2'); //3.Step 1-2
                return value;
            })
            .then(value => {
                console.log('Step 1-3'); //4.Step 1-3
                return value;
            });
    })
    .then(value => {
        console.log(value); //5.110
        console.log('Step 2'); //6.Step 2
    });