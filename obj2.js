

function cars(car_brand, car_model, car_price){
    this.car_brand = car_brand,
    this.car_model = car_model,
    this.car_price = car_price,

    this.teslaAutoPilot = function(){
        return `${this.car_brand} ${this.car_model}
         is Priced for ${this.car_price} dollars `
    }
}

var car1 = new cars("Tesla", "Model S", 45000);



var car2 = new cars("Tesla", "Model 3", 35000)
console.log(car2.teslaAutoPilot());
 
