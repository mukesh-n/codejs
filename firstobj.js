

 var car = {
     brand : "Tesla",
     model : "model s",
     price : 35000,

     autoPilot : function(){
     console.log("Tesla has AutoPilot");
  }

}

console.log(car.autoPilot())
console.log(Object.values(car))
console.log(Object.keys(car))

