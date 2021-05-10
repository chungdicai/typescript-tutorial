(function(){
    class Animal{
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        sayHello(){
            console.log('動物在叫~');
        }
    }

    class Dog extends Animal{
        age: number;

        constructor(name:string,age: number) {
            // 如果在子類中寫了構造函數，此時在子類的構造函數中必須對父類的構造函數進行調用
            super(name); // 調用父類的構造函數
            this.age = age;
        }
        sayHello(){
            // 在類的方法中super就表示當前類的父親
            // super.sayHello();

            console.log('汪汪汪');        }
    }
    const dog = new Dog('小黃',3)
    dog.sayHello();

})()