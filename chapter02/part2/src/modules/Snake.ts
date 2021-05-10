class Snake{
    // 表示蛇的頭
    head: HTMLElement;
    bodies: HTMLCollection;
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element!.getElementsByTagName('div');
    }

    // 獲取蛇的頭的座標
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }

    set X(value) {
        if(this.X === value) {
            return;
        }
        if(value < 0 ||value > 290) {
            throw new Error("蛇撞牆了");
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if(value > this.X){
                // 如果新值大於X 則說明蛇向右走
                value = this.X - 10;
            } else {
                value = this.X + 10
            }
        }
        this.moveBody();

        this.head.style.left = value +'px';
        this.checkHeadBody();
    }

    set Y(value) {
        if(this.Y === value) {
            return;
        }
        if(value < 0 ||value > 290) {
            throw new Error("蛇撞牆了");
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if(value > this.Y){
                value = this.Y - 10;
            } else {
                value = this.Y + 10
            }
        }
        this.moveBody();
        this.head.style.top = value +'px'
        this.checkHeadBody();
    }

    // 增加身體的方法
    addBody() {
        // 向element增加身體
        this.element.insertAdjacentHTML('beforeend','<div></div>');
    }

    // 添加身體移動辦法
    moveBody(){
        /**
         * 將頭後面的身體設置為前面身體的位置
         */
        for (let i=this.bodies.length-1;i > 0;i--) {
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
            
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    checkHeadBody() {
        // 獲取所有身體，檢查頭和身體有沒有重疊
        for(let i = 1; i< this.bodies.length;i++) {
            let body = this.bodies[i] as HTMLElement
            if(this.X === body.offsetLeft && this.Y === body.offsetTop){
                throw new Error("撞到自己了，遊戲結束 Game Over!");
                
            }
        }
    }
}

export default Snake;