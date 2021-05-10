(function(){
    /*
        以abstract 開頭的是類是抽象類，抽象類和其他類別區別不大，只是不能用來創建對象。
            抽象類就是專門被用來繼承的類

            抽象類中可以添加抽象方法

    */
    abstract class Animal{
        name: string;

        constructor(name: string) {
            this.name = name;
        }
        // 在此舉例當中，sayHello是沒什麼用的，因為每種動物的叫聲都不同， 所以在這邊寫sayHello一點用都沒有。
        // 因為在這邊寫了等於一個通用方法，但不能滿足每個類的需求，而且有可能再寫一個類的時候，忘記重寫，就會用到默認的方法。

        // 定義一個抽象方法
        // 抽象方法使用abstract開頭，並且沒有方法
        // 抽象方法只能定義在抽象類中，子類必須對抽象方法進行重寫。
        abstract sayHello():void;
    }

    class Dog extends Animal{
        
        sayHello(){
            console.log('汪汪汪');
        }
    }

    class Cat extends Animal{
        sayHello(){
            console.log('喵喵喵');
        }
    }
    const dog = new Dog('小黃');
    const cat = new Cat('小咪')
    // let a = new Animal('as');
    dog.sayHello();
    cat.sayHello();
})()