let promise = Promise.reject('something wrong');
promise.then(() => {
    console.log('it\'s ok');
}).catch(() => {
    console.log('no, it\'s not ok'); //1.no,it's not ok
    return Promise.reject({
        then() {
            console.log('it will be ok');
        },
        catch () {
            console.log('not yet');
        }
    });
});