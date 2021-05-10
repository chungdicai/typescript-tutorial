"use strict";
// 使用class關鍵字來定義一個類
/*
    物件中主要包含了兩個部分 :
        屬性
        方法
*/
class Person {
    constructor() {
        /*
            直接定義屬性是實例屬性，需要通過物件的實例去訪問
                const per = new Person();
                per.name
    
    
            使用static開頭的屬性是靜態屬性(類屬性)，可以直接透過類去訪問
                Person.age
    
            readonly開頭的屬性表示一個只讀的屬性無法修改
        */
        // 定義實例(體)屬性。當new了之後才能看到這個屬性
        this.name = 'Jung';
    }
    // static readonly age:number = 18;
    // 定義方法
    /*
        如果方法以static開頭則方法就是類方法，可以直接通過類去調用
    */
    // sayHello() {
    //     console.log('hello everybody')
    // }
    static sayHello() {
        console.log('hello everybody');
    }
}
// readonly name:string = 'Jung';
// 在屬性前使用static關鍵字可以定義類屬性 (靜態屬性)
Person.age = 18;
const per = new Person();
//console.log(per);
//console.log(per.name, per.age);
// console.log(Person.age);
console.log(per.name);
// per.name = 'tom';
console.log(per.name);
// Person.age = 33;
// per.sayHello();
// Person.sayHello();
