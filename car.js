class Cars{
    constructor( brand, model, color){
        this.brand = brand,
        this.model = model,
        this.color = color
    }
    get cars1(){
        return `${this.brand} ${this.model} ${this.color}`
    }

    set cars1(value){
        const car1 = value.split(' ')
        this.brand = car1[0];
        this.model = car1[1];
        this.color = car1[2]
    }
}

class conventionalCars extends Cars{
    constructor(brand, model, color, type){
        super(brand, model, color)
        this.type = type
    }
    get carType(){
        return `${this.brand} ${this.model} ${this.color} ${this.type}`
    }

    set carType(value){
        const Cars2 = value.split(' ')
        this.brand = Cars2[0];
        this.model = Cars2[1];
        this.color = Cars2[2];
        this.type = Cars2[3]
    }
}

var Cars2_1 = new conventionalCars('BMW', 'M3',' red', 'Engine')
console.log(Cars2_1.type)