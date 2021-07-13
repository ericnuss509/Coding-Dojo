class Card{
    constructor(name, cost){
        this.name = name,
        this.cost = cost
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name,cost)
        this.power = power
        this.resilience = resilience
    }
    attack = (ninja)=>{
        console.log(`${this.name} attacks ${ninja.name}`)
    }
}

class Effect extends Card{
    constructor(name, cost, test, stat, magnitude){
        super(name, cost)
        this.test = test
        this.stat = stat
        this.magnitude =magnitude
    }
    play = (ninja) =>{
        ninja.cost -= this.cost
        if(this.stat ==="power"){
            ninja.power += this.magnitude;
        }
        else if(this.stat === "resilience"){
            ninja.resilience += this.magnitude
        
        }
    }
}


const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
const HardAlgo = new Effect("Hard Algorithm", 2, "increases targets resilience by 3", "resilience", 3)
const BBN = new Unit ("black belt ninja", 4,5,4)
const promiseReject = new Effect("unhandled promise rejection", 1,"reduce target resilience by 2", "resilience", -2)
const pairProgramming = new Effect("Pair Programming", 3, "increase targets power by 2" ,"power", +2)

HardAlgo.play(RedBeltNinja)
promiseReject.play(RedBeltNinja)
pairProgramming.play(RedBeltNinja)
RedBeltNinja.attack(BBN)

console.log(RedBeltNinja)
console.log(BBN)

