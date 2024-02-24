function* pseudoRandom(n) {
    while (true) {
        console.log(n)
        let x = n * 16807 % 2147483647
        yield x;
        n = x;
    }
}
let generator = pseudoRandom(1);
generator.next().value
generator.next().value
generator.next().value