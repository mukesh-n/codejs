class Animal {
    constructor(name){
        this.name = name

    }
       eats(){
            console.log(this.name +' '+ 'eats food')
        }
    

}
let animal = new Animal('dog')


class Cat extends Animal{
    eats(){
        super.eats();
        console.log(this.name + ' ' + 'eats fish')
    }
}
 let murphy = new Cat('cat')

 murphy.eats();