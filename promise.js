function delay(ms) {
    // 你的代码
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve.call('');
        }, ms);
    })
}

function delay(ms) {
    console.log("123")
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log('runs after 3 seconds'));


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 300);
});

myPromise
    .then((value) => `${value} and bar`)
    .then((value) => `${value} and bar again`)
    .then((value) => `${value} and again`)
    .then((value) => `${value} and again`)
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.error(err);
    });