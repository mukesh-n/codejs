class Cloth {
    
    constructor(color, material) {
        this.color = color;
        this.material = material;
    }
}

class Shirt extends Cloth {
        constructor(color, material, sleeve) {
        super(color, material)
        this.sleeve = sleeve
    }
}

class Kurta extends Cloth {
    constructor(color, material, type) {
        super(color, material)
        this.type = type
    }
}

var sample = new Cloth("white","silk");
var shirt = new Shirt("white","silk","full");
var kurta = new Kurta("red","cotton","type12");
console.log(sample.color)

