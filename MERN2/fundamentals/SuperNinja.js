class Ninja {
    constructor(name, health = 0, speed = 3, strenght = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strenght = strenght;
    }
    sayName(){console.log(`My ninjas name is ${this.name}`)}
    showStats(){console.log(`Ninja ${this.name} His strength is ${this.strenght} His speed is ${this.speed} His health is ${this.health}`)}
    drinkSake(){this.health +=10}
}

class Sensei extends Ninja{
    constructor(name, health=200, speed = 10, strenght = 10, wisdom =10){
        super(name, health, speed, strenght)
        this.wisdom = wisdom
    }
    speakWisdom(){super.drinkSake(); console.log("A wise message")}
}

const mrmiagi = new Ninja("Mr. Miagi")
const mrmiagi3 = new Sensei("Mr.Miagi3")

mrmiagi.sayName()
mrmiagi.showStats()
mrmiagi.drinkSake()
mrmiagi3.speakWisdom()
console.log(mrmiagi)
console.log(mrmiagi3)