console.log("123node")


// function fn3() {
//     alert(this)
// }

// function fn(a, b) {
//     return a + b
// }

function fn2(this: Window) {
    alert(this)
}