var Boss = /** @class */ (function () {
    function Boss() {
        // 所有的观察者
        this.observers = new Array();
    }
    Object.defineProperty(Boss.prototype, "blood", {
        get: function () {
            return this._blood;
        },
        set: function (value) {
            this._blood = value;
            /*
                发生变化
                遍历观察者数组，给所有的观察者发消息
             */
            for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
                var observer = _a[_i];
                observer.bloodChanged(this._blood);
            }
        },
        enumerable: false,
        configurable: true
    });
    return Boss;
}());
var Player1 = /** @class */ (function () {
    function Player1() {
    }
    Player1.prototype.bloodChanged = function (newBlood) {
        console.log("监听到血量变化:" + newBlood);
    };
    return Player1;
}());
var boss = new Boss();
var player1 = new Player1();
// 设置为监听对象
boss.observers.push(player1);
boss.blood = 50;
//# sourceMappingURL=3.observer.js.map