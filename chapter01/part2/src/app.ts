import {hi} from "./m.js"
console.log('app');
console.log('haha');
let a = 10;
// console.log(hi);
function fn(a:number, b:number){
    return a+b;
}

function fn2(this:Window){
    alert(this);
}

let box1 = document.getElementById('box1');
// if(box1 !== null) {
//     box1.addEventListener('click',function(){
//         alert('hello');
//     });
// }

box1?.addEventListener('click',function(){
    alert('hello');
});