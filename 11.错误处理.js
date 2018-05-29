function getNumber() {
    var p = new Promise(function(resolve, reject) {
        //做一些异步操作
        setTimeout(function() {
            var num = Math.ceil(Math.random() * 10); //生成1-10的随机数
            if (num <= 5) {
                resolve(num);
            } else {
                reject('数字太大了' + num);
            }
        }, 2000);
    });
    return p;
}
getNumber().then(function(data) {
    console.log('resolved'); //1.resolved
    console.log(data); //2.num
}, function(reason) {
    console.log('rejected'); //1.rejected
    console.log(reason); //2.数字太大了num
});