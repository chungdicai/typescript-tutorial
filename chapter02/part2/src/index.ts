// 引入樣式
import './style/index.scss'
import GameControl from './modules/GameControl';
// new GameControl();
let gameControl = new GameControl();
setInterval(()=> {
    console.log(gameControl.direction)
},1000)