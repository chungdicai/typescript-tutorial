// JS
// 在JS 裡面可以這樣寫，可以任意賦任何的值，但會造成會有一些問題(安全問題:譬如你希望他是字串，但在使用過程當中，
// 經過某個方法(函數)被改變成其他類型，這個時候再把這個型別做其他的處理就會抱錯，而且也不好找，眼睛要好)。
let a;

a = 10;
a = 'hello';

// 聲明一個變數B，同時指定他的類型為Number，在以後的過程中B只能是數字
let B: number;
B = 10;
B = 100;
// B = 'hello'; // 此行會報錯，因為變數B的類型是number，不能賦值為字串。

// 聲明完變數直接進行賦值
// let c: boolean = false;

// 如果變數聲明和賦值是同時進行的，TS可以自動對變量進行類型檢測。
let c = false;
c = true;
// c = 123;

function sum(a: number, b: number): number {
    return a + b;
}

sum(123, 456);