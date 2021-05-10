// 定義食物類Food
class Food{
    element: HTMLElement;
    constructor() {
        // 獲取頁面中的food 元素並將其賦值給element
        this.element = document.getElementById('food')!;
    }

    // 定義獲取食物X軸座標的方法
    get X(){
        return this.element.offsetLeft;
    }

    get Y(){
        return this.element.offsetTop;
    }

    // 修改食物的位置
    change(){
        // 生成隨機位置
        // 食物位置最小是0 最大是290
        // 蛇移動一次是10px

        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px'
    }
}

export default Food;