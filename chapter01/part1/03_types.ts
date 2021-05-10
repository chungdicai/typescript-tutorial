// 也可以直接使用明文型別
let a: 10;
a = 10;
// a = 11;
// 可以使用 | 來連接多個型別(聯合型別)
let b: 'male' | 'female';
b = 'male';
b = 'female';
// b = 'hello';

let c: boolean | string;
c = true;
c = 'hello';

// any 表示的是任意型別，一個變數設置型別為any後相當對於該變數關閉了TS的型別檢測
// 使用TS時，不建議使用any類型
// let d: any;

// 聲明變數如果不指定型別，則TS解析器會自動判斷變數的型別為any(隱式的any)
let d; // 這種情況也要盡量避免。
d = 10 ;
d = true;
d = 'hello';

// unknown 表示未知類型的值
let e: unknown;
e = 10 ;
e = true;
e = 'hello';

let s: string;

// d的型別式any，它可以賦值給任意變量
// s = d;
e = 'hello';

// unknown型別的變數，不能直接賦值給其他變數
if (typeof e === 'string'){
    s = e;
}

// 類型斷言，可以用來告訴解析器變量的實際型別
/*
 語法:
   變量 as 型別
   <型別>變數
*/
s = e as string;
s = <string>e;

// void 用來表示空，以函數為例，就表示沒有返回值的函數
function fn(): void{
    return undefined;
    // return null;
}

// never 表示永遠不會返回結果
function fn2(): never{
    // 在JS裡面有一種函式，它不返回結果，它是用來報錯的。
    throw new Error('出事了! 阿伯!');
}