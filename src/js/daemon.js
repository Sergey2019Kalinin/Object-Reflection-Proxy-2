import Character from "./domain";

class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");

    this.attack = 25;
    this.defence = 25;
  }
}

export default Daemon;