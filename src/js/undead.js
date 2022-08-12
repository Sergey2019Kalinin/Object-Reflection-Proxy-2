import Character from "./domain";

class Undead extends Character {
  constructor(name) {
    super(name, "Undead");

    this.attack = 40;
    this.defence = 10;
  }
}

export default Undead;