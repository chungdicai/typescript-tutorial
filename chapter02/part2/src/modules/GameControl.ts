// 遊戲控制
import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'
class GameControl {
    // 定義三個屬性
    // 蛇
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    // 創建一個變數來儲存蛇的移動方向
    direction: string = '';
    isLive = true;

    constructor () {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10,2);
        this.init();
    }
    // 遊戲初始化，呼叫後開始
    init() {
        // 綁定鍵盤事件
        document.addEventListener('keydown',this.keydownHandler.bind(this));
        this.run();
    }

    // 創建鍵盤事件
    keydownHandler(event: KeyboardEvent) {
        // 檢查event.key是不是我們想要的
        this.direction = event.key;
    }

    // 控制蛇移動的方法
    run(){
        let X = this.snake.X;
        let Y = this.snake.Y;
        
        // 根據按鍵方向
        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                Y -= 10;
                break;
            case 'ArrowDown':
            case 'Down':
                Y += 10;
                break;
            case 'ArrowLeft':
            case 'Left':
                X -= 10;
                break;
            case 'ArrowRight':
            case 'Right':
                X += 10;
                break;
        }

        this.checkEat(X,Y);

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            alert(e.message + 'Game Over!');
            this.isLive = false;
        }

        // 開啟定時
        this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level-1)*30)
    }

    checkEat(X:number,Y:number){
        if( X === this.food.X && Y === this.food.Y){
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}

export default GameControl;