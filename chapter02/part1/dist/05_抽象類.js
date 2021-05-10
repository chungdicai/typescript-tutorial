"use strict";
(function () {
    /*
        以abstract 開頭的是類是抽象類，抽象類和其他類別區別不大，只是不能用來創建對象。
            抽象類就是專門被用來繼承的類

            抽象類中可以添加抽象方法

    */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('汪汪汪');
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log('喵喵喵');
        }
    }
    const dog = new Dog('小黃');
    const cat = new Cat('小咪');
    // let a = new Animal('as');
    dog.sayHello();
    cat.sayHello();
})();
