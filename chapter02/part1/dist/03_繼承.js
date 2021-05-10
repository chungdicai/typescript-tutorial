"use strict";
(function () {
    // 因為這邊會TS會檢視我們的變數是不是被用過，那這邊用立即執行函式創建自己的作用域，避免發生衝突。
    // 定義一個Animal類
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('動物在叫!!');
        }
    }
    /*
        Dog extends Animal
            - Animal 被稱為父類，Dog被稱為子類
            - 使用繼承後，子類將會擁有父類所有的方法和屬性
            - 通過繼承可以將多個類中共有的代碼寫在一個父類中，
                這樣只需要寫一次即可以讓所有的子類都同時擁有父類中的屬性和方法
                如果希望在子類中添加一些父類沒有的屬性或方法直接加就可以
            - 如果在子類中添加了和父類相同的方法會覆蓋掉父類的方法
                這種子類覆蓋掉父類方法的形式，我們稱為方法重寫
            
    */
    // 定義一個表示狗的類
    // 使Dog類繼承Animal類
    class Dog extends Animal {
        run() {
            console.log(`${this.name}在跑~~~`);
        }
        sayHello() {
            console.log('旺旺旺!!');
        }
    }
    // 定義一個表示貓的類
    // 使Cat類繼承Animal類
    class Cat extends Animal {
        sayHello() {
            console.log('喵喵喵!!');
        }
    }
    const dog = new Dog('小黑', 3);
    const cat = new Cat('咪你黑', 3);
    console.log(dog);
    dog.sayHello();
    dog.run();
    console.log(cat);
    cat.sayHello();
})();
