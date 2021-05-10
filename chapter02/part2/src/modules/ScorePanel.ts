// 定義計分牌的類
class ScorePanel{
    // 用來記錄分數和等級
    score = 0;
    level = 1;
    // 分數和等級所在的元素，在構造函數中初始化
    scoreEle:HTMLElement;
    levelEle:HTMLElement;

    // 設置一格變數限制等級
    maxLevel: number;
    // 設置一個變數表示多少分升級
    upScore: number;

    constructor(maxLevel:number = 10,upScore:number = 10){
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore
    }
    
    // 設置加分的方法
    addScore(){
        this.scoreEle.innerHTML = ++this.score + '';
        //判斷分數升等
        if(this.score % this.upScore === 0){
            this.levelUp();
        }
    }

    // 提升等級
    levelUp(){
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + '';
        } 
    }
}

export default ScorePanel;