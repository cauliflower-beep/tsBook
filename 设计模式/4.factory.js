var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CarType;
(function (CarType) {
    CarType[CarType["Bmw"] = 0] = "Bmw";
    CarType[CarType["Audi"] = 1] = "Audi";
    CarType[CarType["Benz"] = 2] = "Benz";
})(CarType || (CarType = {}));
/*
    工厂模式专为方便的生成对象而生
    实际案例
    比如一个敌人工厂类，分为好多小怪和boss
    这种模式可以方便的生产出各类敌人
    代码会比较简洁
 */
var Car = /** @class */ (function () {
    function Car() {
    }
    // 工厂方法
    Car.Create = function (carType) {
        var car;
        switch (carType) {
            case CarType.Audi:
                car = new Audi();
                console.log("audi");
                break;
            case CarType.Benz:
                car = new Benz();
                console.log("benz");
                break;
            case CarType.Bmw:
                car = new Bmw();
                console.log("bmw");
                break;
        }
        return car;
    };
    return Car;
}());
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bmw;
}(Car));
var Benz = /** @class */ (function (_super) {
    __extends(Benz, _super);
    function Benz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Benz;
}(Car));
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Audi;
}(Car));
var bmw = Car.Create(CarType.Bmw);
//# sourceMappingURL=4.factory.js.map