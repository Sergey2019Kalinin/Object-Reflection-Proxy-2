import Character from "./domain";

class Magician extends Character {
  constructor(name) {
    super(name, "Magician");

    this.attack = 10;
    this.defence = 40;
  }
}

export default Magician;