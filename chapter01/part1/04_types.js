// object 表示一個 js 物件
var a; // 開發中不太使用，因為我們要限制對象，因為我們希望只可以指定屬性
a = {};
a = function () { };
// {} 用來指定對想中可以包含哪些屬性
// 語法: {屬姓名: 屬性值, 屬姓名: 屬性值}
// 在屬性名後面加上? 表示屬性是可選的
var b;
b = { name: 'Jung' };
// [propName:string]:any 表示任意型別的屬性
var c;
c = { name: 'CoCo', age: 18, gender: 'female' };
// let d: Function;
/*
    設置函式結構的型別註記:
    語法: (參數:型別, 參數:型別 ...) => 返回值
*/
var d;
d = function (n1, n2) {
    return n1 + n2;
};
// string[] 表示字串陣列
var e;
e = ['a', 'b', 'c'];
var f;
f = [1, 2, 3];
var g;
g = [1, 2, 3];
/*
    tuple元祖
    元祖就是固定長度的陣列
    
    語法 [型別,型別,型別]
*/
var h;
h = ['a', 'b'];
/*
    enum 枚舉

*/
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: 'Jung',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
// &表示同時
// let j:string & number; // (X)錯誤
var j;
j = { name: 'Jung', age: 18 };
var k;
var l;
var m;

// var Gender;
// (function (Gender) {
//     console.log('3',Gender)
//     console.log('4',Gender["Male"])
//     console.log('5',Gender)
//     console.log('6',Gender["Male"] = 0)
//     console.log('7',Gender)
//     console.log('8',Gender[Gender["Male"] = 0])
//     console.log('9',Gender[Gender["Male"] = 0] = "Male")
//     Gender[Gender["Male"] = 0] = "Male";
//     console.log(Gender)
//     Gender[Gender["Female"] = 1] = "Female";
// })(Gender || (Gender = {}));
// var i;
// i = {
//     name: 'Jung',
//     gender: Gender.Male
// };
// console.log(i.gender === Gender.Male);