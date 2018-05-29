console.log('here we go'); //1.here we go
Promise.all([1, 2, 3]).then(all => {
    console.log('1：', all); //2.1：[1,2,3]
    return Promise.all([function() {
        console.log('ooxx');
    }, 'xxoo', false]);
}).then(all => {
    console.log('2：', all); //3.2:[f,"xxoo",false]
    let p1 = new Promise(resolve => {
        setTimeout(() => {
            resolve('I\'m P1');
        }, 1500);
    });
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('I\'m P2');
        }, 1000);
    });
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('I\'m P3');
        }, 3000);
    });
    return Promise.all([p1, p2, p3]);
}).then(all => {
    console.log('all', all); //4.all:["I'm P1","I'm P2","I'm P3"]
}).catch(err => {
    console.log('Catch：', err);
});