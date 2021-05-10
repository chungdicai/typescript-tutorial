"use strict";
(function () {
    // 定義一個表示人的類
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /*
            getter 方法用來讀取屬性
            setter 方法用來設置屬性
                - 它們被稱為屬性的存取器
        
        */
        // 定義方法，用來獲取name屬性
        // getName() {
        //     return this._name;
        // }
        // // 定義方法，用來設置name屬性
        // setName(value: string) {
        //     this._name = value
        // }
        // getAge() {
        //     return this._age
        // }
        // setAge(value: number) {
        //     // 判斷年齡是否和法
        //     if (value >= 0){
        //         this._age = value
        //     }
        // }
        // TS 中設置getter方法的方式
        get name() {
            console.log('get name()執行了');
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    const per = new Person('Jung', 18);
    /*
        現在屬性是在物件當中設置的，屬性可以任意的被修改，
        屬性可以任意被修改將會導致物件中的數據變得非常不安全
    */
    // per._name = 'John';
    // per._age = -38;
    // console.log(per)
    // console.log(per.getName())
    // per.setName('John')
    // per.setAge(-33)
    // console.log(per)
    console.log(per.name);
    per.name = 'John';
    per.age = -33;
    console.log(per);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(123);
    // b.num = 33;
    // class C {
    //     name:string;
    //     age:number
    //     // 可以直接將屬性定義在構造函數當中
    //     constructor (name:string, age:number) {
    //         this.name = name;
    //         this.age = age;
    //     }
    // }
    class C {
        // 可以直接將屬性定義在構造函數當中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('asd', 111);
})();
