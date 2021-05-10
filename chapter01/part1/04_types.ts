// object 表示一個 js 物件
let a: object; // 開發中不太使用，因為我們要限制對象，因為我們希望只可以指定屬性
a = {};
a = function (){};



// {} 用來指定對想中可以包含哪些屬性
// 語法: {屬姓名: 屬性值, 屬姓名: 屬性值}
// 在屬性名後面加上? 表示屬性是可選的
let b: {name: string,age?: number};
b = {name: 'Jung'};



// [propName:string]:any 表示任意型別的屬性
let c: {name: string,[propName: string]: any};
c= {name: 'CoCo',age: 18, gender: 'female'};



// let d: Function;
/*
    設置函式結構的型別註記:
    語法: (參數:型別, 參數:型別 ...) => 返回值
*/

let d: (a: number, b: number) => number;

d = function (n1, n2): number{
    return n1 + n2;
}


// string[] 表示字串陣列
let e: string[];
e  = ['a','b','c'];

let f: number[];
f  = [1,2,3];

let g: Array<number>;

g = [1,2,3];


/*
    tuple元祖
    元祖就是固定長度的陣列
    
    語法 [型別,型別,型別]
*/

let h: [string,string];
h = ['a','b'];



/*
    enum 枚舉

*/
enum Gender{
    Male = 0,
    Female = 1
}


let i: {name: string, gender: Gender};
i = {
    name: 'Jung',
    gender: Gender.Male
}
console.log(i.gender === Gender.Male)

// &表示同時
// let j:string & number; // (X)錯誤
let j: {name: string} & {age: number};
j = {name: 'Jung' ,age: 18};

// 型別的別名
type myType = string;
type myType2 =  1|2|3|4|5;
let k: myType2;
let l: myType2;

let m: myType;