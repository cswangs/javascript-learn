//独立作用域不会冲突
(function () {


    class Person {
        constructor() {

        }

        name: string = 'monkey king';
        readonly age: number = 18;
        static address: string = 'hua guo mountain'

        sayHello() {
            console.log("hello")
        }

        sayMyName() {
            console.log(this.name)
        }
    }

    const p = new Person()
    console.log(p)
    p.sayHello()
    p.sayMyName()

    // abstract class Animal {
    //     abstract sayHello(): void
    // }
    //
    // class Cat extends Animal {
    //     sayHello(): void {
    //         console.log("hello cat")
    //     }
    // }
    //
    // new Cat().sayHello()

    interface myInterface {
        name: string
        age: number

        sayHello(): void
    }

    interface myInterface {
        gender: string
    }

    const obj: myInterface = {
        name: 'sss',
        age: 111,
        gender: 'man',
        sayHello() {
        }

    }

    class MyClass implements myInterface {
        age: number;
        gender: string;
        name: string;

        sayHello(): void {
        }
    }

    function fn<T>(a: T): T {
        return a
    }

    let res = fn(10);
    let res2 = fn<string>('hello')

    function fn2<T, K>(a: T, b: K): T {
        console.log(b)
        return a;
    }

    fn2<number, string>(123, 'hello')

    interface Inter {
        length: number
    }

    function fn3<T extends Inter>(a: T): number {
        return a.length
    }

    class MyClass2<T> {
        name: T

        constructor(name: T) {
            this.name = name;
        }
    }

    console.log(new MyClass2('haha'))


})()

