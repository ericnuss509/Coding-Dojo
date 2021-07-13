class Ninja {
    constructor(name, health, speed = 3, strenght = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strenght = strenght;
    }
    sayName(){console.log(`My ninjas name is ${this.name}`)}
    showStats(){console.log(`Ninja ${this.name} His strength is ${this.strenght} His speed is ${this.speed} His health is ${this.health}`)}
    drinkSake(){this.health +=10}
}


const mrmiagi = new Ninja("Mr. Miagi", 10)

mrmiagi.sayName()
mrmiagi.showStats()
mrmiagi.drinkSake()

console.log(mrmiagi)