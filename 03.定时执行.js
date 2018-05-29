console.log('here we go');
setTimeout(() => {
    callback("hello");
    console.log(123); //2.123
}, 2000)

function callback(name) {
    console.log(name + ' world'); //1.hello world
}