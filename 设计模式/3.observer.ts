interface IObserver{
    bloodChanged(newBlood)
}

class Boss{
    private _blood:number;

    // 所有的观察者
    observers: Array<IObserver> = new Array<IObserver>();

    set blood(value){
        this._blood = value
        /*
            发生变化
            遍历观察者数组，给所有的观察者发消息
         */
        for(let observer of this.observers){
            observer.bloodChanged(this._blood)
        }

    }

    get blood(){
        return this._blood
    }
}

class Player1 implements IObserver{
    bloodChanged(newBlood) {
        console.log("监听到血量变化:"+newBlood)
    }
}


let boss = new Boss();

let player1 = new Player1();
// 设置为监听对象
boss.observers.push(player1)

boss.blood = 50
