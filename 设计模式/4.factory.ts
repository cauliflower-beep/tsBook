enum CarType{
    Bmw,
    Audi,
    Benz
}

/*
    工厂模式专为方便的生成对象而生
    实际案例
    比如一个敌人工厂类，分为好多小怪和boss
    这种模式可以方便的生产出各类敌人
    代码会比较简洁
 */
class Car{
    name:string;
    // 工厂方法
    static Create(carType:CarType): Car{
        let car:Car;
        switch (carType){
            case CarType.Audi:
                car=new Audi()
                console.log("audi")
                break;
            case CarType.Benz:
                car=new Benz()
                console.log("benz")
                break;
            case CarType.Bmw:
                car= new Bmw()
                console.log("bmw")
                break
        }
        return car
    }
}

class Bmw extends Car{}

class Benz extends Car{}

class Audi extends Car{}

let bmw =Car.Create(CarType.Bmw)