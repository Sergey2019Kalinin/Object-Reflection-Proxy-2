import Character from "./domain";

class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie");

    this.attack = 10;
    this.defence = 40;
  }
}

export default Zombie;