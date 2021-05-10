"use strict";
class Dog {
    // constructor 被稱為構造函數
    // 構造函數會在物件創建時調用
    constructor(name, age) {
        // 在實例方法中，this就表示當前的實例
        // 在構造函數中當前物件就是當前新建的那個物件(實體)
        // 可以通過this向新建的物件(實體)中添加屬性
        this.name = name;
        this.age = age;
    }
    bark() {
        // alert('woof woof woof');
        // 在方法中可以通過this來表示當前調用方法的對對象
        console.log(this.name);
        console.log(this);
    }
}
const dog = new Dog('小黑', 1);
const dog2 = new Dog('小白', 2);
const dog3 = new Dog('小黃', 3);
const dog4 = new Dog('小花', 4);
// console.log(dog);
// console.log(dog2);
// console.log(dog3);
// console.log(dog4);
dog.bark();
