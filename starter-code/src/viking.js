// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(the_damage) {
        this.health -= the_damage;
    }
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(the_damage) {
        super.receiveDamage(the_damage);
        if (this.health > 0) {
            return `${this.name} has received ${the_damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }

    receiveDamage(the_damage) {
        super.receiveDamage(the_damage);
        if (this.health > 0) {
            return `A Saxon has received ${the_damage} points of damage`;
        }
        else {
            return `A Saxon has died in combat`;
        }
    }

}


// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
        this.saxonArmy[0].health -= this.vikingArmy[0].strength;

        if (this.saxonArmy[0].health <= 0) {
            this.saxonArmy.splice(this.saxonArmy[0], 1);
            return 'A Saxon has died in combat';
        }    
    }
    saxonAttack() {
        this.vikingArmy[0].health -= this.saxonArmy[0].strength;
        let result = `${this.vikingArmy[0].name} has received ${this.saxonArmy[0].strength} points of damage`;
        if (this.vikingArmy[0].health <= 0) {
            this.vikingArmy.splice(this.vikingArmy[0], 1);
        }
        return result;
    }

    // SUPER BONUS

    enemyAttack(attackingArmy, defendingArmy) {
        defendingArmy[0].health -= attackingArmy[0].strength;
        let result = `${defendingArmy[0].name} has received ${attackingArmy[0].strength} points of damage`;
        if (defendingArmy[0].health <= 0) {
            defendingArmy.splice(defendingArmy[0], 1);
        }
        return result;
    }

    enemyAttack(vikingArmy, saxonArmy); // in case of Viking attack
    enemyAttack(saxonArmy, vikingArmy); // in case of Saxon attack
    // (I didn't put "this.vikingArmy" and "this.saxonArmy" because it returns an error but I'm not sure why.. There was a this in the original)

    // END SUPER BONUS
    
    showStatus() {
        if (this.saxonArmy.length === 0) {return "Vikings have won the war of the century!"}
        if (this.vikingArmy.length === 0) {return "Saxons have fought for their lives and survived another day..."}
        if (this.saxonArmy.length !== 0 && this.vikingArmy.length !== 0) {return "Vikings and Saxons are still in the thick of battle."}
    }
}


