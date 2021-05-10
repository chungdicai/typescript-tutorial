// function fn(a: any): any{
//     return a;
// }

/*
    在定義函數或是類時，如果遇到類型不明確就可以使用泛型

*/

function fn<T>(a: T): T{
    return a;
}

// 可以直接調用具有泛型的函數
// TS型別推論
let result = fn(10); // 不指定泛型，TS可以自動對型別進行推論
let result2 = fn<string>('hello'); // 指定泛型


// 泛型可以同時指定多個
function fn2<T, K>(a: T,b: K): T{
    console.log(b);
    return a;
}

fn2(123, 'hello');
fn2<number, string>(123, 'hello');

interface Inter{
    length:number;
}
// T extends Inter 表示泛型T 必須是Inter實現類(子類)
function fn3<T extends Inter>(a: T): number{
    return a.length;
}

fn3('123123');

class MyClass<T>{
    name: T;
    constructor(name: T) {
        this.name = name;
    }
}

const mindC= new MyClass('Jung')
const mindCT = new MyClass<string>('Jung')