(function(){
    // 描述一個對象的類型
    type myType = {
        name:string,
        age: number,
        [propname: string]: any
    };
    


    /*
        interface用來定義一個類的結構，用來定義一個類中應該包含哪些屬性和方法
            同時interface也可以當成類型聲明去使用，且interface可重複聲明，與型別化命名不同。

            舉例: 當我們描述一個對象

    */

    interface myInterface{
        name: string;
        age: number;
    }

    interface myInterface{
        gender: string;
    }

    // const obj: myInterface = {
    //     name: 'sss',
    //     age: 111,
    //     gender: 'male'
    // }

    /*
        interface可以在定一的時候去限制類的結構
        interface的所有屬性都不能有實際的值
        interface指定一對象的結構，而不考慮實際值
        在interface中所有的方法都是抽象方法
    */
    interface myInter{
        name:string;
        sayHello():void;
    }
    
    /*
        定義類蒔，可以使類去實現一個interface
            實現interfaceru就是使類滿足interface的要求
    */

    class MyClass implements myInter {
        name: string;

        constructor(name:string){
            this.name = name;
        }

        sayHello() {
            console.log('hihih');
        }
    }
    const myC = new MyClass('ABBY')
})();