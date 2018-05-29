console.log('here we go');
new Promise(resolve => {
        setTimeout(() => {
            resolve('hello');
        }, 2000);
    })
    .then(value => {
        console.log(value); //1.hello
        console.log('everyone'); //2.everyone
        (function() {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log('Mr.Laurence'); //3.Mr.Laurence
                    resolve('Merry Xmas');
                }, 2000);
            });
        }()).then(value => {
            console.log(value + ' world'); //4.Merry Xmas world
        });
    })