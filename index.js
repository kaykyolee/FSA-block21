class Car {
    constructor (make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
}
getDescription(){
    return `This car is a made from ${this.make} with ${this.model} model and it is made in ${this.year}.`
}
}

class ElectricCar extends Car {
    constructor (make,model,year,range){
    super(make,model,year);
    this.range=range;
    }
getDescription(){
    return `${super.getDescription()} It has ${this.range} range.`
}
}

const electricCar1= new ElectricCar('Tesla','Model S','2019','300');
// console.log(electricCar1)
console.log(electricCar1.getDescription())