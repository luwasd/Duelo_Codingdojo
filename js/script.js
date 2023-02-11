class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.power;
        } else {
            throw new Error("Target must be a Unit");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, mag) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }
    play(target) {
        if (target instanceof Unit) {
            if (this.stat = "res") {
                target.res += this.mag;
            } else if (this.stat = "power") {
                target.power += this.mag;
            }
        } else {
            throw new Error("Target must be a Unit");
        }
    }
}

let unit1 = new Unit('Ninja cinturon rojo', 3, 3, 4);
let unit2 = new Unit('Ninja cinturon Negro', 4, 5, 4);

let eff1 = new Effect('Algoritmo Dificil', 2, 'Aumentar la resistencia del Objetivo en 3', 'res', 3);
let eff2 = new Effect('Rechazo de promesa no manejado', 1, 'Reducir la resistencia del Objetivo en 2', 'res', -2);
let eff3 = new Effect('Programación en pareja', 3, 'Aumentar el poder del Objetivo en 2', 'power', 2);

