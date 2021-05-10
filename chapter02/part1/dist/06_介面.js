"use strict";
(function () {
    /*
        定義類蒔，可以使類去實現一個interface
            實現interfaceru就是使類滿足interface的要求
    */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('hihih');
        }
    }
    const myC = new MyClass('ABBY');
})();
