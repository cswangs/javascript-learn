function defer(f, ms) {
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    };
}

function sayHi(who) {
    alert('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // 2 秒后显示：Hello, John