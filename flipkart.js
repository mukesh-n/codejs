class Fashion {
    constructor(Men_wear, Women_wear, Footwear, Watches){
        this.Men_wear = Men_wear,
        this.Women_wear = Women_wear,
        this.Footwear = Footwear,
        this.Watches = Watches
     }
        get productInfo() {
            return `${this.Men_wear} ${this.Women_wear} ${this.Footwear}
             ${this.Watches}`
        }

        set productInfo(value) {
            const products = value.split(' ')
            this.Men_wear = product[0];
            this.Women_wear = product[1];
            this.Footwear = product[2];
            this.Watches = product[3];
        }

    };

    const product1 = new Fashion('shirt', 'T-shirt', 'shoes', 'watches')

   

    class Mens extends Fashion{
        constructor(Men_wear, Women_wear, Footwear, Watches, brand, model, size, color){
            super(Men_wear, Women_wear, Footwear, Watches);
            this.brand = brand,
            this.model = model,
            this.size = size,
            this.color = color
        }
        get subProductinfo(){
            return `${this.brand} ${this.model} ${this.size} ${this.color}`
        }

        set subProductinfo(value){
            const subProduct1 = value.split(' ')
            this.brand = subProduct1[0];
            this.model = subProduct1[1];
            this.size = subProduct1[2];
            this.color = subProduct1[3];
        }
    }

    const subProduct1_1 = new Mens('shirt', 'T-shirt', 'shoes', 'watches','Nike', 'T-s', 'M', 'red')
    const subProduct1_2 = new Mens('shirt', 'T-shirt', 'shoes', 'watches', 'polo', 'shirt', 'L', 'White')
    const subProduct1_3 = new Mens('shirt', 'T-shirt', 'shoes', 'watches', 'jockey', 'sleeveless', 'M', 'black')
    const subProduct1_4 = new Mens('shirt', 'T-shirt', 'shoes', 'watches', 'louis vitton', 'pant', 'M', 'blue')
    const subProduct1_5 = new Mens('shirt', 'T-shirt', 'shoes', 'watches', 'versace', 'shirt', 'XS', 'green')


    class women extends Fashion{
        constructor(Men_wear, Women_wear, Footwear, Watches, brand, model, size, color){
        super(Men_wear, Women_wear, Footwear, Watches);
        this.brand = brand,
        this.model = model,
        this.size = size,
        this.color = color
        }
        get subProductInfo1(){
            return `${this.brand} ${this.model} ${this.size} ${this.color}`
        }

        set subProductInfo1(value){
            const subProduct2 = value.split(' ')
            this.brand = subProduct2[0];
            this.model = subProduct2[1];
            this.size = subProduct2[2];
            this.color = subProduct2[3];
        }
    }
    
    const subProduct2_1 = new women('shirt', 'T-shirt', 'shoes', 'watches','Nike', 'T-s', 'M', 'red')
    const subProduct2_2 = new women('shirt', 'T-shirt', 'shoes', 'watches', 'polo', 'shirt', 'L', 'White')
    const subProduct2_3 = new women('shirt', 'T-shirt', 'shoes', 'watches', 'jockey', 'sleeveless', 'M', 'black')
    const subProduct2_4 = new women('shirt', 'T-shirt', 'shoes', 'watches', 'louis vitton', 'pant', 'M', 'blue')
    const subProduct2_5 = new women('shirt', 'T-shirt', 'shoes', 'watches', 'versace', 'shirt', 'XS', 'green')

class shoes extends Fashion{
    constructor(Men_wear, Women_wear, Footwear, Watches, brand, size, model, color){
        super(Men_wear, Women_wear, Footwear, Watches);
        this.brand = brand;
        this.size = size;
        this.model = model;
        this.color = color;

    }

    get subProductInfo1(){
        return `${this.brand} ${this.size} ${this.model} ${this.color}`
    }
    set subProductInfo1(value){
    const subProductS = value.split(' ') 
    this.brand = subProductS[0];
    this.size = subProductS[1];
    this.model = subProductS[2];
    this.color = subProductS[3];
    }
}

const subProduct3_1 = new shoes('shirt', 'T-shirt', 'shoes', 'watches','Nike', 10, 'model s', 'red')
const subProduct3_2 = new shoes('shirt', 'T-shirt', 'shoes', 'watches','Reebok', 12, 'model 10', 'black')
const subProduct3_3 = new shoes('shirt', 'T-shirt', 'shoes', 'watches','adidas', 11, 'model 3', 'green')
const subProduct3_4 = new shoes('shirt', 'T-shirt', 'shoes', 'watches','Nike', 9, 'opop', 'white')
const subProduct3_5 = new shoes('shirt', 'T-shirt', 'shoes', 'watches','polo', 10, 'model ss', 'red')


class Watches extends Fashion{
    constructor(Men_wear, Women_wear, Footwear,product_id, brand, type, material){
    super(Men_wear, Women_wear, Footwear, Watches);
    this.product_id = product_id;
    this.brand = brand;
    this.type = type;
    this.material = material;

    }
    get subProductInfoW () {
        return `${this.product_id} ${this.brand} ${this.type} ${this.material}`
    }
    set subProductInfoW (value) {
        const subProducrW = value.split(' ');
        this.product_id = subProductW[0];
        this.brand = subProductW[1];
        this.type = subProductW[2];
        this.material = subProduct[3];   
    }
}

const subProduct4_1 = new Watches('shirt', 'T-shirt', 'shoes', 'watches',1 , 'Seiko', 'dial', 'Silver')
const subProduct4_2 = new Watches('shirt', 'T-shirt', 'shoes', 'watches',2 , 'Titan', 'analog', 'black metal')
const subProduct4_3 = new Watches('shirt', 'T-shirt', 'shoes', 'watches',3 , 'fast track', 'digital', 'leather')
const subProduct4_4 = new Watches('shirt', 'T-shirt', 'shoes', 'watches',4 , 'apple', 'smart', 'rubber')
const subProduct4_5 = new Watches('shirt', 'T-shirt', 'shoes', 'watches',5 , 'G-shock', 'sports', 'black rubber')

console.log(product1.Footwear);
console.log(subProduct1_1.model);
console.log(subProduct2_2.size);
console.log(subProduct3_3.size);
console.log(subProduct4_4.product_id);