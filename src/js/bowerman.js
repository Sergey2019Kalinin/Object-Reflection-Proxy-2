import Character from "./domain";

class Bowerman extends Character {
  constructor(name) {
    super(name, "Bowerman");

    this.attack = 25;
    this.defence = 25;
  }
}

export default Bowerman;